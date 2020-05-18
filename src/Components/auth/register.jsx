import React from "react";
import { connect } from "react-redux";
import { register_user } from "../../Redux/userAction";
import { Redirect, Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import styles from "../Comp.module.css";

const Register = (props) => {
  const submit = (value) => {
    value.history = [];
    value.userId = String(props.user_data.length);
    props.register_user(value);
    props.history.push("/login");
  };

  const layout = {
    labelCol: {
      span: 13,
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

  const { is_auth, user_data } = props;
  if (is_auth) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className={styles.loginForm}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={submit}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email address / Username"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your mail Id!",
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

          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your Age!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lisence Number"
            name="lisenceId"
            rules={[
              {
                required: true,
                message: "Please input your Phone Lisence Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <h5>
          If you have an account <Link to="/login">Sign in</Link>
        </h5>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  is_auth: state.user.isauth,
  user_data: state.user.user_data,
});
const mapDispatchToProps = (dispatch) => ({
  register_user: (data) => dispatch(register_user(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
