import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { user } from "../../types";
import { loginStyle } from "./login.style";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<user>({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const onFinish = () => {
    
  };

  const handleRegister = () => {
    navigate("/signup")
  };

  const classes = loginStyle()

  return <div className={classes.formcontainer}>
    <h2>Welcome Back,</h2>
    <h2>Login</h2>
    <Form
      name="normal_login"
      className="login-form"
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 16 }}
      style={{ width: "70%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="email"
          onChange={(e) =>
            setLoginDetails((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          value={loginDetails.email}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setLoginDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          value={loginDetails.password}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember"  valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <span className={classes.forgotPassword}>Forgot password</span>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
         <span className={classes.register} onClick={handleRegister}>Or register now!</span>
      </Form.Item>
    </Form></div>

};

export default Login;
