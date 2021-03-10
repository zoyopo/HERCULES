import React, { Component } from "react";
import PropTypes from "prop-types";

class Agents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agentName: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.agentName !== prevState.agentName&&!prevState.agentName) {
      return {
        ...prevState,
        agentName: nextProps.agentName,
      };
    } else {
      return prevState;
    }
  }

  componentDidMount() {}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //   console.log(this.state.agentName)
    //   console.log(prevProps,prevState)
   if(this.state.agentName===`more powerful ${prevState.agentName}`){
    this.setState((prevState, props) => ({
        agentName: `less powerful ${prevState.agentName}`,
      }));
    }
    return {
      msg: "getSnapshotBeforeUpdate",
    };
  }

 
  enhance = () => {
    this.setState((prevState, props) => ({
      agentName: `more powerful ${prevState.agentName}`,
    }));
  };
  render() {
    const { agentName } = this.state;
    return (
      <div>
        <h1>agentName:</h1>
        {agentName}
        <button onClick={this.enhance}>enhance</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
  }

}

Agents.propTypes = {};

export default Agents;
