import { Button, Form, Input, Checkbox, Row, Col, Typography,  } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SignIn: React.FC = () => {
  return (
    <div className="signin-page">
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <div className="signin-form">
            <Title level={2} className="text-center">Sign In</Title>
            <Form
              name="login"
              initialValues={{ remember: true }}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                >
                  Sign In
                </Button>
              </Form.Item>

              <Row justify="space-between">
                <Col>
                  <Text type="link">Forgot Password?</Text>
                </Col>
                <Col>
                  <Text type="link">Don't have an account? Sign Up</Text>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
