import classes from "./header.module.css";
import amazonLogo from "../../assets/amazon_PNG11.png";
import flag from "../../assets/flag (1).png";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <header className={classes.header}>
        <div className={classes.header_container}>
          {/* logo */}
          <Link to="/" className={classes.logo_container}>
            <img src={amazonLogo} alt="amazon logo" />
          </Link>

          {/* delivery */}
          <div className={classes.delivery}>
            <CiLocationOn className={classes.icon} />
            <div>
              <p className="text-lightText font-light text-sm">Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="" className="text-black">
                All
              </option>
            </select>

            <input type="text" name="" id="" placeholder="Search product" />
            <IoSearchOutline className={classes.searchIcon} size={40} />
          </div>

          {/* right side links */}
          <div className={classes.right_links}>
            <div className={classes.language}>
              <img src={flag} alt="flag" />
              <select>
                <option value="">EN</option>
              </select>
            </div>

            <Link to={!user && "/auth"} className={classes.account}>
              <div>
                {user ? (
                  <>
                    <p className=" flex flex-col text-xs font-light">
                      Hello {user?.email?.split("@")[0]}
                      <span
                        className="text-sm font-semibold"
                        onClick={() => auth.signOut()}
                      >
                        Sign Out
                      </span>
                      {/* the above is firebase method which is used to signout(auth.signOut) */}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-light">Hello Sign In</p>

                    <span className="text-sm font-semibold">
                      Account & Lists
                    </span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/orders" className={classes.orders}>
              <p className="text-xs font-light">Returns</p>
              <span className="text-sm font-semibold">& Orders</span>
            </Link>

            {/* cart */}
            <div className="flex items-start justify-center relative">
              <Link to="/cart" className="flex items-center">
                <FiShoppingCart size={35} />
                <p className="ml-2 text-xs font-semibold mt-3 text-whiteText">
                  Cart{" "}
                  <span className="absolute text-xs top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                    {totalItem}
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <HeaderBottom />
    </section>
  );
};

export default Header;
