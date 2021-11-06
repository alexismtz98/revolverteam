import React from "react";
import { Route } from "react-router-dom";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default RouteWithSubRoutes;