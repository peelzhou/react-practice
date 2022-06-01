import React, { Component, Fragment } from "react";
import { Button, Modal, Input, message } from "antd";
import { Link } from "react-router-dom";
import MyTable from "./table";
import "./style.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      login: false,
      modal: false,
      
      username: "",
      password: "",
    };
  }

  showModal() {
    this.setState({
      modal: true,
    });
  }

  hideModal() {
    this.setState({
      modal: false,
    });
  }

  changeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  checkLogin() {
    const { username, password } = this.state;
    const url = `http://www.dell-lee.com/react/api/login.json?user=${username}&password=${password}`;
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        const login = res.data.data.login;
        if (login) {
          message.success("Success Login");
          this.setState({
            login: true,
            modal: false,
          });
        } else {
          message.error("Invalid username or password");
        }
      });
  }

  logOut() {
    axios
      .get("http://www.dell-lee.com/react/api/logout.json", {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        if (data.logout) {
          message.info("Success Logout");
          this.setState({
            login: false,
          });
        }
      });
  }

  render() {
    const { login } = this.state;
    return (
      <div className="login">
        {login ? (
          <Fragment>
            <Button type="primary" onClick={this.logOut}>
              Logout
            </Button>
            <MyTable />
          </Fragment>
        ) : (
          <Button type="primary" onClick={this.showModal}>
            Login
          </Button>
        )}

        <Modal
          title="Login"
          visible={this.state.modal}
          onOk={this.checkLogin}
          onCancel={this.hideModal}
        >
          <Input
            placeholder="Username"
            style={{ marginBottom: 10 }}
            value={this.state.username}
            onChange={this.changeUsername}
          />
          <Input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.changePassword}
          />
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://www.dell-lee.com/react/api/isLogin.json", {
        withCredentials: true,
      })
      .then((res) => {
        const login = res.data.data.login;
        this.setState({ login });
      });
  }
}

export default Login;
