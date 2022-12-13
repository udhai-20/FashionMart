import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import PagenotFound from "../Component/PagenotFound/PagenotFound";
import Admin from "../Pages/Admin/Admin";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Order from "../Pages/Order/Order";
import Product from "../Pages/Products/Product";
import Profile from "../Pages/Profile/Profile";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Wishlist from "../Pages/Wishlist/Wishlist";

const AllRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/singleProduct/:id" element={<SingleProduct />}></Route>
        <Route path="*" element={<PagenotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default AllRoutes;
