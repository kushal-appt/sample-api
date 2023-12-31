import { useState } from "react";
import { signupStyles } from "./signup.style";
import { Button, Checkbox, Form, Input } from "antd";
import { user } from "../../types";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const classes = signupStyles();

  const [userDetails, setUserDetails] = useState<user>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onFinishFailed = (errorInfo: string[]) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (values: user) => {
    console.log(values);
    navigate("/");
  };
  return (
    <div className={classes.formcontainer}>
      <h2>Sign</h2>
      <Form
        name="basic"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        style={{ width: "70%" }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={(e) => onFinishFailed(e.errorFields[0].errors)}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must have a minimum length of 8" },
            {
              pattern: new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
              ),
              message:
                "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 0, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
