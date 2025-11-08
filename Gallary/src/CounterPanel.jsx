import React, { Component } from "react";
import "./App.css";

class CounterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
      step: 1,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + Number(prevState.step),
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - Number(prevState.step),
    }));
  };

  handleStepChange = (event) => {
    this.setState({ step: event.target.value });
  };

  render() {
    const { count } = this.state;
    let message = "";
    let colorStyle = { color: "black" };

    if (count > 10) {
      message = "High Count!";
      colorStyle = { color: "green" };
    } else if (count < 0) {
      message = "Negative Count!";
      colorStyle = { color: "red" };
    }

    return (
      <div className="counter-panel">
        <h2>Interactive Counter Panel</h2>

        <h3 style={colorStyle}>Count: {count}</h3>
        {message && <p style={colorStyle}>{message}</p>}

        <div className="controls">
          <button className="btn" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>

        <div className="step-input">
          <label>Step Value: </label>
          <input
            type="number"
            value={this.state.step}
            onChange={this.handleStepChange}
          />
        </div>
      </div>
    );
  }
}

export default CounterPanel;
