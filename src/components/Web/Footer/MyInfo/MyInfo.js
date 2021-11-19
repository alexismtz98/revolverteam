import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Agustín Navarro Galdon" />
      <h5>
      El Sistema Web “Para el apoyo de la transformación de tu negocio a digital” es una propuesta que brinda soluciones de consultoría e 
      implementación de recursos digitales para negocios online de pequeñas empresas a nivel municipal. Brindando asesorías básicas por 
      medio de videos, en las áreas de informática, marketing digital, diseño y comunicación visual para la web. Donde también se podrán 
      contratar profesionales de un área en específico para llevar a cabo sus proyectos web a un precio más accesible y así de tal manera 
      nuestros clientes logren crecer sus negocios en digital con estrategias de vanguardia.
      </h5>
      <SocialLink />
    </div>
  );
}
