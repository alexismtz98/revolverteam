import React from 'react';
import { Layout, Tabs} from "antd";
import { Redirect } from 'react-router-dom';
import Revolver from "../../../assets/img/png/logorevolver.png";
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm"; 
import { getAccessTokenApi } from "../../../api/auth";

import "./SignIn.scss"

export default function SignIn () {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    if (getAccessTokenApi()) {
        return <Redirect to="/admin" />;
      }
    return(
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                <img className="menu-top__left-logo" src={Revolver} alt="Alexis Uriel Martinez Salazar"/>
                </h1>
                <div className="sign-in__content-tabs">
                    <Tabs type="card" defaultActiveKey="1">
                        <TabPane tab={<span>Entrar</span>} key ="1">
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={<span>Nuevo usuario</span>} key ="2" >
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}