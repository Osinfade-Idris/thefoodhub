import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import StaffList from './pages/staffList/StaffList';
import BranchList from './pages/branchList/BranchList';
import IncomingStaff from './pages/incomingStaff/IncomingStaff';
import Staff from './pages/staff/Staff';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import Login from "./pages/login/Login"
import Apply from "./pages/apply/Apply";
import CategoryList from './pages/categoryList/CategoryList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route path="/dashboard" element={<App/>} >
        <Route index element={<Dashboard/>} />
        <Route path="staffs" element={<StaffList/>} />
        <Route path="staff/:staffId" element={<Staff/>} />
        <Route path="products" element={<ProductList/>} />
        <Route path="product/:productId" element={<Product/>} />
        <Route path="branches" element={<BranchList/>} />
        <Route path="categories" element={<CategoryList/>} />
        <Route path="applications" element={<IncomingStaff/>} />


      </Route>

     
      <Route path='' element={<MainLayout/>} >
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="apply" element={<Apply/>} />

      </Route>


       

    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

