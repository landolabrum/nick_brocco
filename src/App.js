import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from "./templates/Form";
import Home from "./templates/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav >
        <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
        <Link to="/">
          <img src="//cdn.shopify.com/s/files/1/1926/6067/files/vecotred_56x.png?v=1569295219"/>
          </Link>
        </a>
          <ul>
            <li>
              
              {/* <i className="material-icons">home</i>
              </Link> */}

              </li>
              {/* <Link to="/form">Form</Link> */}
          </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <footer classname="page-footer">
          <div className="container center">
         <h6>www.MyRealityEquation.com</h6>
          {/* <div className="break"/> */}
          <br/>
          </div>
        </footer>
      </div>
    </Router>
  );
}
