import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/Auth/SignUp"
import Payment from "./pages/Payment/Payment"
import Orders from "./pages/Orders/Orders"
import Cart from "./pages/Cart/Cart"
import Page404 from "./pages/Pa404/Page404";
import Results from "./pages/Results/Results"
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/catagory/:categoryName" element={<Results />}/>
      </Routes>
    </Router>
  );
}

export default Routing;
