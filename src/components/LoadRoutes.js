import React from "react";
import { Route, Switch } from "react-router-dom";

//Instead of a const { props } = props; I'll just destructure in the params.
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}

export default LoadRoutes;