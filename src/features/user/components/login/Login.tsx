import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 400 }}
      >
        <Form.Item label="Email">
          <Input type="text" name="email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" name="password" />
        </Form.Item>
        <Form.Item name="remember">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
