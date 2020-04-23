import React from "react";
import Header from "./components/Header.jsx";
import {createBrowserHistory} from "history";

import NavBar from "./components/NavBar";
import About from "./pages/About.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const history = createBrowserHistory();
function App(props) {
  return (
    <div className="App container">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/product" exact component={ProductPage}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
