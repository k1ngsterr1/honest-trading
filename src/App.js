import React from "react";

// Screens
import MainScreen from "./screens/MainScreen";
import CardsScreen from "./screens/CardsScreen";
import AboutScreen from "./screens/AboutScreen";
import CulturesScreen from "./screens/CulturesScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <MainScreen></MainScreen>
      <CardsScreen></CardsScreen>
      <AboutScreen></AboutScreen>
      <Footer></Footer>
    </div>
  );
};

export default App;
