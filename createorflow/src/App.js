import Main from './components/main';
import React from 'react';
import { Menu, Layout } from "antd";
import logo from "./images/logo.png";
import reload from "./images/reload.png";
import homeIcon from "./images/homeIcon.png";
import supportIcon from './images/supportIcon.png';
import plusIcon from "./images/plusIcon.png";
import './App.css';

const { Sider } = Layout;

const menuItems = [
  {
    icon: <img src={homeIcon} alt='homeIcon' />,
    label: "Dashboard",
    key: "1"
  },
  {
    icon: <img src={reload} alt='reload' />,
    label: 'Transitions',
    key: "2"
  },
  {
    icon: <img src={supportIcon} alt='supportIcon' />,
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
              justifyContent: "space-evenly"
            }}
          />
          <img
            src={plusIcon}
            alt='plus button'
            className='sider_image'
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: "pointer",
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