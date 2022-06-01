import React, { Component } from "react";
import { Button, Modal, Input, message } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

class Admin extends Component {
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
      <div className="adminLogin">
        {login ? (
          <Button type="primary" onClick={this.logOut}>
            Admin Logout
          </Button>
        ) : (
          <Button type="primary" onClick={this.showModal}>
            Admin Login
          </Button>
        )}
        
        <Modal
          title="Admin Login"
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

  // render() {
  //     if (this.state.login) {
  //       return <div className="vip">vip</div>;
  //     }else{
  //       return <Route path="/vip" render={() => <Redirect to="/" />} />
  //     }
    
  // }

}

export default Admin;
