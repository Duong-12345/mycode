import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { button } from "../action/actionButton";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';
// interface Prop {
//   page?: string;
// }
const Menu1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  // useEffect(() => {
  //   setCollapsed(true);
  // }, [page]);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // const dispatch = useDispatch();
  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16, marginLeft: 192, marginTop: 11 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        style={{ width: 243, height: 60 }}
      >
        <Menu.Item
          key="1"
          icon={
            <Link to="/shop">
              <ShopOutlined />
            </Link>
          }
          style={{ width: 243, height: 60 }}
          // onClick={() => {
          //   dispatch(button(1));
          // }}
        >
          Shop
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <Link to="/cart">
              <ShoppingCartOutlined />
            </Link>
          }
          style={{ width: 243, height: 60 }}
          // onClick={() => {
          //   dispatch(button(2));
          // }}
        >
          Cart
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={
            <Link to="/profile">
              <ContainerOutlined />
            </Link>
          }
          style={{ width: 243, height: 60 }}
          // onClick={() => {
          //   dispatch(button(3));
          // }}
        >
          My Profile
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Menu1;
