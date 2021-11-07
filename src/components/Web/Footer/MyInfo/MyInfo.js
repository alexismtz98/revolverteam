import React from 'react';
import Revolver from "../../../../assets/img/png/logorevolver.png";
import SocialLinks from "../../SocialLinks"; 

import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Revolver} alt="Alexis Uriel Martinez Salazar" />
            <h4>Comparte y disfruta del conocimiento.</h4>
            <SocialLinks />
        </div>
    )
}