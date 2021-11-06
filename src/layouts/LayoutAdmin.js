import React, { useState } from "react";
import { Layout } from "antd";
import LoadRoutes from "../components/LoadRoutes";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";

import "./LayoutAdmin.scss";

export default function LayoutAdmin({ routes }) {
    //Or const {routes} = props;
    const { Header, Content, Footer } = Layout;
    const { menuCollapsed, setMenuCollapsed } = useState(false);
  
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout className="layout-admin"
        style={{marginleft: menuCollapsed ? "80px" : "200px"}}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes}/>
          </Content>
          <Footer className="layout-admin__footer">
            E-SkyTech's RapidCycle all rights reserved
          </Footer>
        </Layout>
      </Layout>
    );
  }