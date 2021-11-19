import React from "react";
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={AcademyLogo} alt="Transforma tu negocio" />
      <p>
      Debido a la declaración del brote de COVID-19 como pandemia, la mayoría de las empresas y negocios de todo tipo se han visto 
afectadas por el cese de actividades o la reducción de estas mismas. Provocando que todos los negocios, organismos e instituciones de 
todo tipo se vieran en la obligación de transformarse y adaptarse de manera imprevista a la ya creciente era digital. Es por ello que, a 
consecuencia del actual estado de emergencia sanitaria el interés por las Plataformas Digitales y los Marketplace se disparó en un 
500%. </p>
    </div>
  );
}
