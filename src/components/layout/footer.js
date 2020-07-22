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
        <Row>
        
          <div className="copyright text-center m-auto" id="copyright">
            
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-dark-footer"
              target="_blank"
            >
            </a>
            <a
              href="https://isaiasfrancisco.com.br"
              target="_blank"
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
