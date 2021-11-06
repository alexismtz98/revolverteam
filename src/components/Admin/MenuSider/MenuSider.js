//React
import React from "react";
import { Link } from "react-router-dom";
/* //Routes
import routes from "../../../config/routes.js";
import RouteWithSubRoutes from "../../RouteWSubroutes"; */
//Ant Design Components
import { Layout, Menu } from "antd";
//import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import HomeOutlined from '@ant-design/icons/HomeOutlined';
import MenuOutlined from '@ant-design/icons/MenuOutlined';

import "./MenuSider.scss";

function MenuSider(props) {
    const { menuCollapsed } = props;
    const { Sider } = Layout;
    console.log(props);
  
    return (
      <Sider className="collector-sider" collapsed={menuCollapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={"/admin"}>
              <HomeOutlined />
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/admin/menu-web"}>
              <MenuOutlined />
              <span className="nac-text">Menu Web</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
  
  export default MenuSider;