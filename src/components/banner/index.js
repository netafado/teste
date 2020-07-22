/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
// core components

function IndexHeader() {
  return (
    <>
      <div className="page-header clear-filter"  style={{
            backgroundImage: "url(" + require("assets/img/bg-topo.png") + ")",

          }} >
        <div
          className="page-header-image" >
          <Container fluid className="pb-5">
            <Row className="align-self-center justify-content-center">
              <Col lg={6} xl={4} className="align-self-center order-2 order-lg-1">
                  <h1 className="text-primary bold">conectando empreendedores.</h1>
                  <p  className="text-black-50 ">O <strong>Achei Fornecedor</strong> é uma plataforma de negócios voltada para o público B2B (Business-to-Business), 
                  onde empreendedores de todos os setores encontram os melhores Fornecedores de produtos e serviços para o seu negócio.</p>
                  <Button className="btn-round btn-lg">Cadastra-se</Button>
              </Col>
              <Col lg={5} xl={7} className="align-self-center pt-2 pt-lg-5 order-lg-2 order-1">
                <img  className="img-fluid" src={require("../../assets/img/imagem-index.png")}>
                </img>
              </Col>
            </Row>
          </Container>        
        </div>
      </div>
    </>
  );
}



export default IndexHeader;
