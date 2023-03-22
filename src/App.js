import React from "react";

// Screens
import MainScreen from "./screens/MainScreen";
import CardsScreen from "./screens/CardsScreen";
import AboutScreen from "./screens/AboutScreen";
import CulturesScreen from "./screens/CulturesScreen";
import ContactScreen from "./screens/ContactScreen";
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
      <ContactScreen></ContactScreen>
      <Footer></Footer>
    </div>
  );
};

export default App;
