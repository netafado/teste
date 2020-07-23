/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer bg-white">
      <Container>
        <Row>
        <img className="m-auto" src={require("../../assets/img/logo.svg")} />
        </Row>
        <Row className="justify-content-center mt-2 mb-2">
            <a href=""><img src={require("../../assets/img/facebook.svg")} className="m-1" /></a>
            <a href=""><img src={require("../../assets/img/twitter.svg")} className="m-1" /></a>
            <a href=""><img src={require("../../assets/img/linkdin.svg")} className="m-1" /></a>
            <a href=""><img src={require("../../assets/img/pinterest.svg")} className="m-1" /></a>
        </Row>
        <Row>

          <div className="copyright text-center m-auto text-black-50" id="copyright">
            
            Designed by{" "}
            <a
              href="https://isaiasfrancisco.com.br"
              target="_blank"
              className="text-black-50"
            >
              Isaias Francisco dos Santos
            </a>
            .
          </div>
        </Row>

      </Container>
    </footer>
  );
}

export default DarkFooter;
