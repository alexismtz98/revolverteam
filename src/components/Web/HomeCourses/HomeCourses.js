import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.png";
import wordPress from "../../../assets/img/jpg/wordpress.png";
import prestaShop from "../../../assets/img/jpg/prestashop-1-7.png";
import cssGrid from "../../../assets/img/jpg/css-grid.png";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Conoce nuestros servicios</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title=""
              subtitle="Plataforma de educacion digital"
              link=""
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title=""
              subtitle="Contacto con profesionales expertos"
              link=""
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title=""
              subtitle="Soporte 24/7 con el equipo tecnico"
              link=""
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title=""
              subtitle="Bolsa de trabajo"
              link=""
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={prestaShop}
              title=""
              subtitle="Asesoria en financiamiento"
              link=""
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title=""
              subtitle="Plataforma sustentada en codigo abierto"
              link=""
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
