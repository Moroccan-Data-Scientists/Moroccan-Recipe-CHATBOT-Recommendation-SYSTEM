import { createBrowserRouter } from "react-router-dom";
import UpdatePassword from "../pages/UpdatePassword";
import ChatBoot from "../pages/ChatBoot";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import LogInPage from "../pages/LogInPage";

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "/userDashbord",
    element: <Dashboard />,
  },
  {
    path: "/ChatBoot",
    element: <ChatBoot />,
  },
  {
    path: "/UpdatePassword",
    element: <UpdatePassword />,
  },
  {
    path: "*",
    element: <p>not Found</p>, // replace with  something else like page to show the error
  },
]);