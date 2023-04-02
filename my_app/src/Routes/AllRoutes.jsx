import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SingleProductPage from "./SingleProductPage";
import Cart from "./Cart";
import SignUp from "./SignUp";
import Booking from "./Booking";
function AllRoutes() {
  // const links = [
  //   { path: "/", name: "Home" },
  //   {
  //     path: "/login",
  //     name: "Login",
  //   },
  //   {
  //     path: "/dashboard",
  //     name: "Dashboard",
  //   },
  //   { path: "/product/:id", name: "SingleProductPage" },
  // ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
  
        <Route path="/products/:id/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
      </Routes>

      {/* {links.map((e) => {
        return (
          <Link key={e.path} to={e.path}>
            {e.name}
          </Link>
        );
      })} */}
    </div>
  );
}

export default AllRoutes;
