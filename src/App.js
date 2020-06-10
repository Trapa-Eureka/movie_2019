import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    // need to fill that this array with a lot of information.(for movie info?)
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready to make Movie App"}</div>;
  }
}

export default App;

// jsx can send information to component.
/*
Function Component is Function. and something else return and print screen.
Class Component is Class. but extend from react component and print screen. 
React is run about our render method of our class component. it's automatic.
*/
// state is an object.
// React when calling setState performs the render process again.
