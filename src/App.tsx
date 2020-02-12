import React from "react";

import { Layout } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";

import { Content } from "./layout/Content";
import { Navigation } from "./layout/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Navigation />
          <Content />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
