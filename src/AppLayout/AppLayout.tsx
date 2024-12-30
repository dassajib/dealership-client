import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import NavigationBar from "../components/NavigationBar/NavigationBar";


const { Sider, Header, Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="h-screen">
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapse} className="bg-gray-800">
        <Sidebar collapsed={collapsed} />
      </Sider>

      {/* Main Layout */}
      <Layout className="site-layout">
        {/* Navbar */}
        <Header className="px-0">
          <NavigationBar collapsed={collapsed} onToggle={toggleCollapse} />
        </Header>

        {/* Content */}
        <Content className="m-4 bg-white p-4 shadow rounded">
          {<Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;