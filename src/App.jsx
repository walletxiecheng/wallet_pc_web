import React from "react";
import Menu from "./components/Menu";
import Index from "../src/pages/Index/index";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Menu></Menu>
      <Index></Index>
      <Footer></Footer>
    </div>
  );
}
