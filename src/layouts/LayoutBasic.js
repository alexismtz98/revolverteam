import React from "react";
import { Layout } from "antd";

import "./LayoutBasic.scss";
import LoadRoutes from "../components/LoadRoutes";

export default function LayoutBasic({ routes }) {
    const { Content, Footer } = Layout;
    return (
      <Layout>
        <h2>Menu Sider for Recycler...</h2>
        <Layout>
          <Content>
            <LoadRoutes routes={routes} />
          </Content>
          <Footer>Welcome to your very own RapidCycle</Footer>
        </Layout>
      </Layout>
    );
  }