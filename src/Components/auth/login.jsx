import React, { Component } from "react";
import swal from "sweetalert";
import { login_user } from "../../Redux/userAction";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import styles from "../Comp.module.css";
import { Form, Input, Button } from "antd";

const Login = (props) => {
  const submit = async (value) => {
    const { username, password } = value;
    await props.login_user(username, password);
    if (props.is_error) {
      displayError();
    }
  };

  const layout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const displayError = () => {
    swal({
      title: "Error",
      text: "The given username or password is incorrect.",
      icon: "error",
    });
  };

  const { is_auth } = props;
  if (is_auth) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={styles.loginForm}>
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={submit}
          >
            <Form.Item
              label="Email Address / Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <h5>
          If you don't have an account <Link to="/register">Sign up</Link>
        </h5>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  is_auth: state.user.isauth,
  is_error: state.user.is_error,
});
const mapDispatchToProps = (dispatch) => ({
  login_user: (email, pwd) => dispatch(login_user(email, pwd)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
