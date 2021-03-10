import React from "react";
import Player from "./Player.jsx";
import { Form, Input, Button } from "antd";
import Agent from './Agents.jsx'
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "Announce",
      playerNames: [],
    };
  }

  static getDerivedStateFromProps(props, state) {}

  componentDidMount() {
    console.log("My [myOwnTarget] is Pretty");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  announce = () => {
    this.setState({ playerNames: ["LiLei1", "Nancy", "Alexendar"] });
  };
  onFinish = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <h1>
          <button onClick={this.announce}>{this.state.text}</button>
        </h1>
        {this.state.playerNames.map((item) => (
          <>
          <Player name={item} />
          <Agent agentName={item}/>
          </>
        ))}
        <Form onFinish={this.onFinish} style={{ paddingLeft: 200 }}>
          <Form.Item name="userName">
            <Input />
          </Form.Item>
          <Form.Item name="userName1">
            <Input />
          </Form.Item>
          <Form.Item name="userName2">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form>
      </div>
    );
  }
}

export default Home;
