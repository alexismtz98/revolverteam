import React from "react";
import { Button } from "antd";
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import PoweroffOutlined from '@ant-design/icons/PoweroffOutlined';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
//import { MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from "@ant-design/icons";
import RevolverLogo from "../../../assets/img/png/revolver.png";

import "./MenuTop.scss";

function MenuTop(props) {
    console.log(props);
    const { menuCollapsed, setMenuCollapsed } = props;
    return (
      <div className="menu-top">
        <div className="menu-top__left">
          <img
            className="menu-top__left-logo"
            src={RevolverLogo}
            alt="RevolverLogo"
          />
          <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}/>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          <Button/>
        </div>
        <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("Desconexion")}/>
          <PoweroffOutlined /> 
          <Button/>
        </div>
      </div>
    );
  }
  
  export default MenuTop;