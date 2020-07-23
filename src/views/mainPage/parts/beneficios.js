import React from 'react';
import {Container, Col, Row} from "reactstrap"
import Slider from "react-slick";

const beneficios = [
  {
    texto: "Crie uma rede de contatos."
  },
  {
    texto: "Facilidade para negociar."
  },
  {
    texto: "Não espere pelo representante comercial."
  },
  {
    texto: "Facilidade para obter informações sobre produtos e serviços."
  },
  {
    texto: "Facilidade para encontrar fornecedores."
  },
  {
    texto: "Fornecedores ganham mais visibilidade."
  }
]

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const Beneficios = () =>{
    return(
        <Container>
            <Row>
              <Col>
                <h1 className="text-primary bold title text-center mt-2 text-uppercase">benefícios</h1>
                <p className="text-black-50 text-center">Conheça alguns benefícios ao fazer parte da nossa plataforma.</p>
              </Col>
            </Row>
            <div className="mb-5">
              <Slider {...settings}>
                  {beneficios.map((item, i)=>{
                    return(
                      <div key={Math.random()} className="text-center">
                        <div className="moeda m-auto" style={{backgroundImage:  `url(${require('../../../assets/img/moeda.svg')})` }}>
                          <h1 className="bold text-primary display-4" >{i + 1}</h1>
                        </div>
                        <h4 className="text-center text-primary bold">{item.texto}</h4>
                      </div>
                    )
                  })}
              </Slider>
            </div>
          </Container>  
    )
}

export default Beneficios

