import Layout from "../../components/Layout";
import ProductCard from "../../components/Product/ProductCard";
import { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider"; // Adjust the import path as necessary
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext); // Destructure basket from context

  // Calculate the total price
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className={classes.container}>
          <div className={classes.cart_container}>
            <h2>Hello {user?.name || "Guest"}</h2>
            <h3>Your shopping basket</h3>
            <hr className="h-1 bg-black" />
            {basket?.length === 0 ? (
              <p>Oops! No items in your cart</p>
            ) : (
              basket.map((item, i) => (
                <div key={i} className="flex items-center mb-4">
                  <ProductCard
                    product={item}
                    desc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className="flex flex-col items-center ml-4 space-y-2">
                    <button
                      onClick={() => increment(item)}
                      className="px-3 py-1 border rounded  hover:bg-orange-400 focus:outline-none"
                    >
                      <IoIosArrowUp />
                    </button>
                    <span className="px-3 py-1 border border-gray-300 rounded bg-white">
                      {item.amount}
                    </span>
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-3 py-1 border border-gray-300 rounded hover:bg-orange-400 focus:outline-none"
                    >
                      {" "}
                      <IoIosArrowDown />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={classes.summary_container}>
              <div className={classes.subtotal}>
                <p>Subtotal ({basket.length} items):</p>
                <CurrencyFormat amount={total} />
              </div>
              <span className={classes.gift_option}>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payment" className={classes.checkout_button}>
                Continue to checkout
              </Link>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Cart;
