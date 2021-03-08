import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Home = lazy(() => import("../components/landing/Landing")),
  About = lazy(() => import("../components/about/About")),
  CurrVitae = lazy(() => import("../components/currVitae/CurrVitae")),
  Photography = lazy(() => import("../components/photography/Photography")),
  Svip = lazy(() => import("../components/svip/Svip")),
  SvipSubject = lazy(() => import("../components/svip/Subject")),
  Dev = lazy(() => import("../components/dev/Dev")),
  Err404 = lazy(() => import("./404"));

const { NODE_ENV } = process.env;

const RedirectComponent = () => {
  const url = NODE_ENV === "development" ? "http://localhost:8000/admin/" : "https://api.kvdomingo.xyz/admin/";
  window.location.assign(url);
};

const transitionTimeout = 300,
  transitionName = "page",
  routes = [
    { path: "/admin", name: "Admin", Component: RedirectComponent },
    { path: "/about", name: "About", Component: About },
    { path: "/cv", name: "CV", Component: CurrVitae },
    { path: "/photography", name: "Photography", Component: Photography },
    { path: "/dev", name: "Dev", Component: Dev },
    { path: "/svip/:courseSlug", name: "SVIP-Course", Component: SvipSubject },
    { path: "/svip", name: "SVIP", Component: Svip },
    { path: "/", name: "Home", Component: Home },
  ];

export default (
  <Switch>
    {routes.map(({ path, Component }, i) => (
      <Route key={i} path={path} exact={path === "/"}>
        {({ match }) => (
          <CSSTransition in={match != null} timeout={transitionTimeout} classNames={transitionName} unmountOnExit>
            <Component />
          </CSSTransition>
        )}
      </Route>
    ))}

    <Route key="404" status={404}>
      {({ match }) => (
        <CSSTransition in={match != null} timeout={transitionTimeout} classNames={transitionName} unmountOnExit>
          <Err404 />
        </CSSTransition>
      )}
    </Route>
  </Switch>
);
