import Main from './components/main';
import React from 'react';
import { Menu, Layout, Button } from "antd";
import { HomeOutlined, ReloadOutlined, MessageOutlined, PlusOutlined } from "@ant-design/icons";
import logo from "./images/logo.png"
import './App.css';

const { Sider } = Layout;

const menuItems = [
  {
    icon: <HomeOutlined />,
    label: "Dashboard",
    key: "1"
  },
  {
    icon: <ReloadOutlined />,
    label: 'Transitions',
    key: "2"
  },
  {
    icon: <MessageOutlined />,
    label: 'Support',
    key: "3"
  }
];


function App() {
  return (
    <div className="App">
      <div className="layout_main_container">
        <Sider
          collapsible
          defaultCollapsed
          width={140}
          trigger={<img src={logo} alt='logo' className="sider-trigger" />}
          style={{ backgroundColor: "#05081d", position: "fixed", top: 0, left: 0, height: "100vh" }}
        >
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            style={{
              backgroundColor: "#05081d",
              color: '#43bccd',
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          />

          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#6d32a5',
              borderColor: '#6d32a5',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          />
        </Sider>

        <div className="main-content">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
