import React from "react";

import { Layout, Menu } from "antd";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { routes } from "../routes";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Layout.Header>
      <div
        style={{
          width: "120px",
          height: "31px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px 24px 16px 0",
          float: "left"
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathname]}
        style={{ lineHeight: "64px", textAlign: "right" }}
      >
        {routes.map(({ path, label }) => (
          <Menu.Item key={path}>
            <Link to={path}>{label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};
