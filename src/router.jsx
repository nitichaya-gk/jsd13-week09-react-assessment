import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import UserHome from "./pages/user-home";
import AdminHome from "./pages/admin-home";
import Owner from "./pages/owner";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/user", element: <UserHome /> },
  { path: "/admin", element: <AdminHome /> },
  { path: "/owner", element: <Owner /> },
]);

export default router;