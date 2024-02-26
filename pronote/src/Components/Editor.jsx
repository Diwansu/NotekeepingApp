import  { Component } from "react";
import "../App.css";
import logo from "../assets/logo.png";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    // to bind the method with event handler without ().
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  //event handler method to change the state.
  //setState is used to change the state.
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  clearOut = () => {
    this.setState({ value: "" });
    document.getElementsByClassName("input-text")[0].value = "";
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="input">
            <h3>Input</h3>
            <img src={logo} id="gram" onClick={this.clearOut} />
            <textarea
              className="input-text"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>

          <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </div>
    );
  }
}
