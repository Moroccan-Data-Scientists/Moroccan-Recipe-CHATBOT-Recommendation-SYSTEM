import React, { useEffect } from "react"; // Import React from 'react'

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UpdatePassword from "./pages/UpdatePassword";
import ChatBoot from "./pages/ChatBoot";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import LogInPage from "./pages/LogInPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/chatboot":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/chatboot" element={<ChatBoot />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/UpdatePassword" element={<UpdatePassword />} />
    </Routes>
  );
}
export default App;
