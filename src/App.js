import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;

// jsx can send information to component.
/*
Function Component is Function. and something else return and print screen.
Class Component is Class. but extend from react component and print screen. 
React is run about our render method of our class component. it's automatic.
*/
// state is an object.
// React when calling setState performs the render process again.6
