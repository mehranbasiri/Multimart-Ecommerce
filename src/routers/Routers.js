import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import ProductDetails from "../components/pages/ProductDetails";
import Shop from "../components/pages/Shop";
import Cart from "../components/pages/Cart";
import Chekout from "../components/pages/Chekout";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import AddProduct from "../admin/AddProduct";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Chekout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-product" element={<AddProduct />} />
        <Route path="dashboard/users" element={<Users />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
