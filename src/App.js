import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Hero from "./components/Hero/Hero";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Services from "./components/Services/Services";
import OurWork from "./components/OurWork/OurWork";
import Teams from "./components/Teams/Teams";
import ContactUs from "./components/ContactUs/ContactUs";
import { Toaster } from "react-hot-toast"
import Footer from "./Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-main-section">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero  />
      <TrustedBy  />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;