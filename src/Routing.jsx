

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Authontication/SignUp";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Reaults";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRout/ProtectedRout";
// The above two are methods we install from Stripe to use them in our payment system
const stripePromise = loadStripe(
  "pk_test_51PfUboJWGC2xM9ezzVpnPRCWrgwFZt4pbwOc3IZsASz1wMxfeI7BrQnfN9nVitiLmkoADJRZClUEOS9n3VCVPGMH00VI5ox3yR"
);

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />{" "}
        {/* Corrected spelling */}
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* protect payment routs */}
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              redirect="/payment" // Redirect to login page if not authenticated
              msg="You must log in to access this page."
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        {/* protect order routs */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              redirect="/orders"
              msg="You must log in to access your Orders"
            >
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
