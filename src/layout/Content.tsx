import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "../routes";

export const Content = () => (
  <Switch>
    {routes.map(({ path, component }) => (
      <Route path={path} key={path}>
        {component}
      </Route>
    ))}
    <Redirect to="/track" />
  </Switch>
);
