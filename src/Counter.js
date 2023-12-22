import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    if (this.state.count === 0) return;
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
    // this.setState({ count: 10 });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    return (
      <div className="comp-test">
        <button onClick={this.handleDecrement}>-</button>
        <span> {this.state.count} </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
