
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import Login from './pages/Auth/Login';

import PrivateRoute from './components/Routes/Private';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import UpdateProduct from './pages/Admin/UpdataProduct';
import Products from './pages/Admin/Product';
import Users from './pages/Admin/Users';
import AdminOrders from './pages/Admin/AdminOrders';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Dashboard from './pages/user/Dashboard';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CartPage from './pages/CartPage';
import Search from './pages/Search';
import CategoryProduct from './pages/CategoryProduct';





function App() {
  return (
 <>
 <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />

        <Route path="user" element={<Dashboard />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
         <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} /> 
        </Route>



        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>



        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      
 </Routes>
 </>
  );
}

export default App;
