import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Navbar from "./navbar.js";
import Footer from "./footer";



function Index(props) {;
  return (
    <>
      <Navbar/>
      <div className="wrapper">
        <div className="main">
          { props.children }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
