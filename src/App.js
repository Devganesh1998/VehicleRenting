import React from "react";
import Routing from "./Router/Routing";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
