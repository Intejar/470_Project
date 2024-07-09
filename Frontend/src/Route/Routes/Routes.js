import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayout from "../../Layout/Dashboard";
import UserProfile from "../../Dashboard/UserProfile/UserProfile";
import SlotBooking from "../../Pages/SlotBooking/SlotBooking";
import BookingHistory from "../../Dashboard/BookingHistory/BookingHistory";
import HoldSlot from "../../Dashboard/HoldSlot/HoldSlot";
import TurfOwnerBooking from "../../Dashboard/TurfOwnerBooking/TurfOwnerBooking";
import ManualBooking from "../../Dashboard/ManualBooking/ManualBooking";
import AddProduct from "../../Pages/Admin/AddProduct/AddProduct";
import AllProduct from "../../Pages/Admin/AllProduct/AllProduct";
import AllTurf from "../../Pages/Admin/AllTurf/AllTurf";
import Shop from "../../Pages/Shop/Shop";
import CustomOrder from "../../Pages/Shop/CustomOrder/CustomOrder";
import CustomAdminOrder from "../../Pages/Shop/CustomOrder/CustomAdminOrder";
import MyOrder from "../../Dashboard/MyOrder/MyOrder";
import MonthlyCalculation from "../../Pages/TurfOwner/MonthlyCalc/MonthlyCalculation";
import TurfOwnerDiscount from "../../Pages/TurfOwner/DiscountSet/DiscountSet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
  // {
  //     path:'*',
  //     element:<NotFound></NotFound>
  // }
]);

export default router;
