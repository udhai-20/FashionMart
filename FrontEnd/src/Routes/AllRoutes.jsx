import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAddDatas from "../Component/AdminAddDatas/AdminAddDatas";
import AdminDashboard from "../Component/AdminDashboard/AdminDashboard";
import AdminLogin from "../Component/AdminLogin/AdminLogin";
import { Footer } from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import PagenotFound from "../Component/PagenotFound/PagenotFound";
import Admin from "../Pages/Admin/Admin";
import AdminSignup from "../Pages/AdminSignup/AdminSignup";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Component/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Order from "../Pages/Order/Order";
import Kids from "../Pages/Products/Kids";
import Beauty from "../Pages/Products/Beauty";
import Men from "../Pages/Products/Men";
import Women from "../Pages/Products/Women";
import Sale from "../Pages/Products/Sale";
import { Otp } from "../Pages/Otp Page/Otp";
// import Product from "../Pages/Products/Product";
import Profile from "../Pages/Profile/Profile";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Wishlist from "../Pages/Wishlist/Wishlist";
import AdminCollection from "../Component/AdminCollection/AdminCollection";
import Loading from "../Pages/Checkout/Loading";
import PrivateRoute from "./PrivateRoute";


const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/signup" element={<AdminSignup />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/admin/collection" element={<AdminCollection />}></Route>
        <Route path="/admin/adddata" element={<AdminAddDatas />}></Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/sale" element={<Sale />}></Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
        <Route path="/singleProduct/:id" element={<SingleProduct />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="*" element={<PagenotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
