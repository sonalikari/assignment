import React from "react";
import "./App.css";
import SideBar from "./components/Sidebar/Sidebar.jsx";
import Header from "./pages/Header.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideBar>
        <Header />
        <Home />
      </SideBar>
    </Router>
  );
}

export default App;
