//React
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {Layout, Menu} from "antd"
//import { BookOutlined,UserOutlined, HomeOutlined, UnorderedListOutlined, MessageOutlined } from '@ant-design/icons';
/* //Routes
import routes from "../../../config/routes.js";
import RouteWithSubRoutes from "../../RouteWSubroutes"; */
//Ant Design Components
//import { Layout, Menu } from "antd";
//import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import HomeOutlined from '@ant-design/icons/HomeOutlined';
//import MenuOutlined from '@ant-design/icons/MenuOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

       return (
           <Sider className="admin-sider" collapsed={menuCollapsed}>
           <Menu
             theme="dark"
             mode="inline"
             defaultSelectedKeys={[location.pathname]}
           //   defaultSelectedKeys={["1"]}
           >
                   <Menu.Item key="/admin">
                       <Link to={"/admin"}>
                       <HomeOutlined />
                           <span className="nav-text">Dashboard</span>
                       </Link>
                   </Menu.Item>
                   <Menu.Item key="/admin/users">
                       <Link to={"/admin/users"}>
                       <UserOutlined />
                           <span className="nav-text">Usuarios</span>
                       </Link>
                   </Menu.Item>
                   <Menu.Item key="/admin/menu">
                       <Link to={"/admin/menu"}>
                       <UnorderedListOutlined />
                           <span className="nav-text">Menú web</span>
                       </Link>
                   </Menu.Item>
                   <Menu.Item key="/admin/courses">
                       <Link to={"/admin/courses"}>
                       <BookOutlined />
                           <span className="nav-text">Cursos</span>
                       </Link>
                   </Menu.Item>
                   <Menu.Item key="/admin/blog">
                       <Link to={"/admin/blog"}>
                       <MessageOutlined />
                           <span className="nav-text">Blog</span>
                       </Link>
                   </Menu.Item>
               </Menu>
           </Sider>
       )
}

export default withRouter(MenuSider);