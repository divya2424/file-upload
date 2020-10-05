import App from "../../App/App.jsx";
import React from "react";
import PageNotFound from "../../Shared/PageNotFound/PageNotFound.jsx";


const routes = [

  {
    path: "/",
    exact: true,
    main: () => <App />,
  },
  {
    path: "*",
    main: PageNotFound,
  },
];

export default routes;
