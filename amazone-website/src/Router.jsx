import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Payment from "./pages/Payment/Payment"
import Orders from "./pages/Orders/Orders"
import Cart from "./pages/Cart/Cart"
import Page404 from "./pages/Pa404/Page404";
import Results from "./pages/Results/Results"
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Auth from "./pages/Auth/Auth";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/catagory/:categoryName" element={<Results />}/>
        <Route path="/products/:productid" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default Routing;
