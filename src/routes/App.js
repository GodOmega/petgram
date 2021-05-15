import React, { Suspense } from "react";
import Context from "../context/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useInitialState from "../hooks/useInitialState";

import Layout from "../components/Layout";
// import Home from "../pages/Home";
// import Detail from "../pages/Detail";
// import Favs from "../pages/Favs";
// import User from "../pages/User";
// import NotRegisterUser from "../pages/NotRegisterUser";
// import NotFound from "../pages/NotFound";

const Favs = React.lazy(() => import("../pages/Favs"));
const Home = React.lazy(() => import("../pages/Home"));
const Detail = React.lazy(() => import("../pages/Detail"));
const User = React.lazy(() => import("../pages/User"));
const NotRegisterUser = React.lazy(() => import("../pages/NotRegisterUser"));

export const App = () => {
  const initialState = useInitialState();
  return (
    <>
      <Context.Provider value={initialState}>
        <Router>
          <Layout>
            <Switch>
              <Suspense fallback={<div></div>}>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/pet/:id" component={Home} />
                <Context.Consumer>
                  {({ auth }) => (
                    <>
                      <Route exact path="/favs">
                        {auth ? <Favs /> : <Redirect to="/login" />}
                      </Route>
                      <Route exact path="/user">
                        {auth ? <User /> : <Redirect to="/login" />}
                      </Route>
                      <Route exact path="/login">
                        {!auth ? <NotRegisterUser /> : <Redirect to="/" />}
                      </Route>
                    </>
                  )}
                </Context.Consumer>
              </Suspense>
            </Switch>
          </Layout>
        </Router>
      </Context.Provider>
    </>
  );
};

export default App;
