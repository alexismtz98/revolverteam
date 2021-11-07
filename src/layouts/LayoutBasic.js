import React from "react";
import { Row, Col } from 'antd';
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";
import LoadRoutes from "../components/LoadRoutes";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props; 

  return (
      <>
      <Row>
          <Col lg={4} />
          <Col lg={16}>
              <MenuTop/>
          </Col>
          <Col lg={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Footer />
      </>
  )

  // return (
  //     <Layout>
  //         <h2>Menu sidebar</h2>
  //         <Layout>
  //             <Content>
  //                 <LoadRoutes routes={routes} />
  //             </Content>
  //             <Footer>Christian 2019</Footer>
  //         </Layout>
  //     </Layout>

  // )
}