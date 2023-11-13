import React from "react";
import SmoothScroll from "smooth-scroll";
import Router from "./router";
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
