import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation.jsx";
import { Header } from "./header.jsx";
import { About } from "./about.jsx";
import { Contact } from "./contact.jsx";
import JsonData from "./data.json";
import SmoothScroll from "smooth-scroll";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Menu = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Menu;
