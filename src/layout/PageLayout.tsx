import React from "react";

import { Layout, Typography } from "antd";

interface PageLayoutProps {
  title?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => (
  <Layout.Content style={{ padding: "20px 50px" }}>
    <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
      {title ? (
        <Typography>
          <Typography.Title level={3}>{title}</Typography.Title>
        </Typography>
      ) : null}
      {children}
    </div>
  </Layout.Content>
);
