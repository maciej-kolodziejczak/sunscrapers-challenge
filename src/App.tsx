import React from "react";

import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import { Content } from "./layout/Content";
import { Navigation } from "./layout/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Navigation />
        <Content />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
