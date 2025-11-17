import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor() called");
  }

  componentDidMount() {
    console.log("here we called the did mount fucntion ");
  }

  componentDidUpdate() {
    console.log("Component updated ");
  }

  componentWillUnmount() {
    console.log("Componenet will unmount here ");
  }

  render() {
    console.log("render() called");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
