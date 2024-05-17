import React from "react";
import Menu from "./components/Menu";
import Index from "../src/pages/Index";
import Privacry from "../src/pages/Privacy"
import Agreement from "../src/pages/Agreement"
import Footer from "./components/Footer";
import { Router, Route,Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Menu></Menu>
      {/* <Router> */}
      <Routes>
         <Route path="/" Component={Index}></Route>
         <Route path="/index" Component={Index}></Route>
         <Route path="/agreem" Component={Agreement}></Route>
         <Route path="/privacy" Component={Privacry}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

