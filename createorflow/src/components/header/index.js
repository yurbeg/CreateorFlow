import { Avatar } from "antd";
import { BellOutlined, InfoCircleFilled } from "@ant-design/icons";
import "./index.css";

const menuItems = [
  { label: "TOTAL TRANSITIONS", value: "15" },
  { label: "INITIATED", value: "2", icon: <InfoCircleFilled style={{ color: "purple" }} /> },
  { label: "IN PROGRESS", value: "5", icon: <InfoCircleFilled style={{ color: "purple" }} /> },
  { label: "COMPLETED", value: "2", icon: <InfoCircleFilled style={{ color: "purple" }} /> },
];

const Header = () => {
  return (
    <div className="header_container">
      <div className="avatart_container">
        <div className="dasboard">
          <p>DASHBOARD</p>
        </div>
        <div className="avatar">
          <BellOutlined />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_IbRQvlVj5_heS6MBUBdPrmF7MUJdswsAw&s" />
        </div>
      </div>
      <div className="logo_div">
        <div className="logo">
          <h2>Insights</h2>
        </div>
        <div className="logo_menu">
          {menuItems.map((item, index) => (
            <div key={index} className="menu_item">
              <h6>{item.label}</h6>
              {item.icon}
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;