import React from "react";
import Layout from "../../components/layout"
import BannerTopo from "../../components/banner"
import {Container, Row, Col, Button} from "reactstrap"
// reactstrap components
// import {
// } from "reactstrap";

// core components





function Index() {
  React.useEffect(() => {
    console.log("sidebar-collapse")
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
      <Layout>
        <BannerTopo />
        <Container fluid>
            <Row >
              <Col lg={6}>
                <img  className="img-fluid" src={require("../../assets/img/juntos.png")}  style={{marginLeft: "-15px"}}>
                </img>
              </Col>
              <Col  lg={4} className="align-self-center">
                <h1 className="text-primary bold">conectando empreendedores.</h1>
                <p  className="text-black-50">O <strong>Achei Fornecedor</strong> é uma plataforma de negócios voltada para o público B2B (Business-to-Business), onde empreendedores de todos os setores encontram os melhores Fornecedores de produtos e serviços para o seu negócio.</p>

              </Col>
            </Row>
          </Container>  
      </Layout>
  );
}

export default Index;
