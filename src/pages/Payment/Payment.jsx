// Payment.jsx
import logo from "./images/pngimg.com - amazon_PNG1.png";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import classes from "./Payment.module.css";
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { Type } from "../../Utility/action";

const Payment = () => {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User:", user);
    console.log("Basket:", basket);
  }, [user, basket]);

  // total item
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  // total price
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      // 1. contacting backend or function (firebase) to get the client key
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });

      const clientSecret = response.data?.clientSecret;
      console.log(clientSecret);

      // 2. client side (react) confirmation using stripe
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentResult.error) {
        setCardError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        // 3. after the confirmation store the order in the database (firebase) and cleaning the basket
        console.log("Payment successful");

        await setDoc(
          doc(
            collection(db, "users", user.uid, "orders"),
            paymentResult.paymentIntent.id
          ),
          {
            basket: basket,
            amount: paymentResult.paymentIntent.amount,
            created: paymentResult.paymentIntent.created,
          }
        );
        // removing orders from basket after paying for them
        dispatch({type:Type.EMPTY_BASKET})
        navigate("/orders", { state: { msg: "You have placed new order" } });
        // Clear basket logic here (depends on your context setup)
      }
    } catch (error) {
      console.error("Payment failed", error);
      setCardError("Payment failed. Please try again.");
    } finally {
      setProcessing(false); // Ensure processing is set to false in both success and error cases
    }
  };

  return (
    <>
      <div className="w-[1240px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between bg-gray-100 pt-8 items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="Amazon Logo" className="w-28" />
            </Link>
          </div>
          <div className="text-3xl">
            Checkout (<span className="text-blue-300">{totalItem}</span>)
          </div>
          <div>
            <FaLock size={35} className="text-gray-400" />
          </div>
        </div>
        {/* Payment Method */}
        <section className="pt-8">
          {/* Address */}
          <div className={classes.flex}>
            <h3>Delivery Address</h3>
            <div>
              <div>{user?.email}</div>
              <div>123 React Lane</div>
              <div>Chicago, IL</div>
            </div>
          </div>
          <hr className="my-4" />
          {/* Product */}
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              {basket?.map((item) => (
                <ProductCard product={item} flex={true} key={item.id} />
              ))}
            </div>
          </div>
          <hr className="my-4" />
          {/* Card Form */}
          <div className={classes.flex}>
            <h3>Payment system</h3>
            <div className={classes.payment_card_container}>
              <div className={classes.payment_detail}>
                <form onSubmit={handlePayment}>
                  {/* error form */}
                  {cardError && (
                    <small style={{ color: "red" }}>{cardError}</small>
                  )}
                  {/* card element */}
                  <CardElement onChange={handleChange} />
                  {/* price */}
                  <div className={classes.payment_price}>
                    <div>
                      <span className="flex gap-2">
                        <p>Total order |</p> <CurrencyFormat amount={total} />
                      </span>
                    </div>
                    <button type="submit">
                      {processing ? (
                        <div>
                          <ClipLoader color="gray" size={15} />
                        </div>
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Payment;






































