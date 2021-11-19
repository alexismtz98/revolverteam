import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Sistema web para el apoyo <br /> en transformacion digital de negocios.
          </h2>
          <h3>
          El Sistema Web “Para el apoyo de la transformación de tu negocio a digital” es una propuesta que brinda soluciones de consultoría e 
          implementación de recursos digitales para negocios online de pequeñas empresas a nivel municipal.
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
