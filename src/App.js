import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
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
