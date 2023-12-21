import Layout from "antd/es/layout/layout";
import { sideBarStyles } from "./sidebar.style";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import React from "react";
import {
  AlignRightOutlined,
  CheckOutlined,
  DashboardOutlined,
  EditOutlined,
  ExceptionOutlined,
  FormOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/es/menu/SubMenu";

const SideBar: React.FC = () => {
  const classes = sideBarStyles();
  return (
    <div className={classes.sidebarContainer}>
      <Menu mode="inline">
        <SubMenu key="dashboard" title="DashBoard" icon={<DashboardOutlined />}>
          <Menu.Item key="1">Analysis</Menu.Item>
          <Menu.Item key="2">Monitor</Menu.Item>
          <Menu.Item key="3">Workplace</Menu.Item>
        </SubMenu>
        <SubMenu key="form" title="Form" icon={<FormOutlined />}>
          <Menu.Item key="4">Option 3</Menu.Item>
          <Menu.Item key="5">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="list" title="List" icon={<OrderedListOutlined />}>
          <Menu.Item key="6">Option 3</Menu.Item>
          <Menu.Item key="7">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="profile" title="Profile" icon={<ProfileOutlined />}>
          <Menu.Item key="9">Option 3</Menu.Item>
          <Menu.Item key="10">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="result" title="Result" icon={<CheckOutlined />}>
          <Menu.Item key="11">Option 3</Menu.Item>
          <Menu.Item key="12">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="exception" title="Exception" icon={<ExceptionOutlined />}>
          <Menu.Item key="13">Option 3</Menu.Item>
          <Menu.Item key="14">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="account" title="Account" icon={<UserOutlined />}>
          <Menu.Item key="15">Option 3</Menu.Item>
          <Menu.Item key="16">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="graphic" title="Graphic Editor" icon={<EditOutlined />}>
          <Menu.Item key="17">Option 3</Menu.Item>
          <Menu.Item key="18">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
      <div className={classes.sideFooter}>
        <hr></hr>
        <AlignRightOutlined style={{ fontSize: "19px", margin: "5px" }} />
      </div>
    </div>
  );
};

export default SideBar;
