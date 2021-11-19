import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar-persona.jpg";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de los clientes que estan dando el siguiente paso en su negocio
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonso Campos"
                subtitle="Emprendedor"
                avatar={AvatarPersona}
                review="Una plataforma excelente, he buscado en muchas paginas pero ninguna me ha enseñado tanto como esta, ahora estoy desarrollando mi propio plan sin ningún tipo de problema."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="David Ramiro"
                subtitle="Deseñador Grafico"
                avatar={AvatarPersona}
                review="Si te gustan los cursos que profundizan en la materia, te lo recomiendo y es muy sencillo contactar con otros profesionales."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Valentina Rubio"
                subtitle="Agente de ventas"
                avatar={AvatarPersona}
                review="El contenido de la plataforma es muy completo y de necesitar cualquier dato adicional el equipo de soporte tecnico está super pendiente para responderlo. Ya tengo creado mi E-commerce."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Marc Pérez"
                subtitle="Musico Independiente"
                avatar={AvatarPersona}
                review="Empecé el curso sin saber nada de tecnologia y creo que ahora tengo un nivel de conocimiento como para embarcarme en realizar mi primera aplicación."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Jesús Cruz"
                subtitle="Comerciante Online"
                avatar={AvatarPersona}
                review="Me ha parecido un buen curso, las explicaciones muy claras y lo que enseña me ha sido muy útil para la aplicación que me habían encargado."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Francisco Garcia"
                subtitle="Desarrollador"
                avatar={AvatarPersona}
                review="Aprendes todo lo que promete el video de inicio y te da la capacidad para después crear tus propias soluciones. Gracias por la ayuda."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
