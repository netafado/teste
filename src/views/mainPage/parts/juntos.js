import React from 'react';
import {Container, Col, Row} from "reactstrap"
const Juntos = () =>{
    return(
        <Container fluid>
            <Row >
              <Col lg={6}>
                <img  className="img-fluid" src={require("../../../assets/img/juntos.png")}  style={{marginLeft: "-15px"}}>
                </img>
              </Col>
              <Col  lg={4} className="align-self-center">
                <h1 className="text-primary bold title">Estamos aquipara ajudar o seu negócio</h1>
                <p  className="text-black-50">Com a nossa plataforma, os Fornecedores ganham muito mais visibilidade, proporcionando aumento nas vendas, e as empresas Clientes evitam o risco de desabastecimento, conseguindo produtos e serviços de melhor qualidade a um preço muito mais competitivo.</p>
              </Col>
            </Row>
          </Container>  
    )
}

export default Juntos