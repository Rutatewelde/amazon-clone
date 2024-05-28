import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/orders/Orders";
import Results from "./Pages/Results/Results";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe  } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51PKnd3RvUWerdmpBtCnoYTgTSKcsOYYDELeY3mxz7tTYqRDIPshAu1VpVAOdZXDjQFl6PFD5NtBovUnpIgASpv4y00cdrqJFI8"
);


function Routing() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Payments" element={
        <ProtectedRoute msg={"you must log in to pay"}redirect={"/payments"}>
          <Elements stripe={stripePromise}>
         <Payment /> </Elements>
         </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute msg={"you must to access  to orders"}redirect={"/orders"}>
        <Orders />
        </ProtectedRoute>
        }/>

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing;
