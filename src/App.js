import React from "react";

// Screens
import MainScreen from "./screens/MainScreen";
import CardsScreen from "./screens/CardsScreen";
import AboutScreen from "./screens/AboutScreen";
import CulturesScreen from "./screens/CulturesScreen";
import Footer from "./components/Footer";

// Styles
import styles from "./styles/app-styles/app.css";

const App = () => {
  return (
    <div className="app">
      <MainScreen></MainScreen>
      <CardsScreen></CardsScreen>
      <AboutScreen></AboutScreen>
      <CulturesScreen></CulturesScreen>
      <Footer></Footer>
    </div>
  );
};

export default App;
