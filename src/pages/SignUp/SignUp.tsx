import { Button, Form, Input, Checkbox, Row, Col, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SignUp: React.FC = () => {
  return (
    <div className="signup-page">
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <div className="signup-form">
            <Title level={2} className="text-center">Sign Up</Title>
            <Form
              name="signup"
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
                name="email"
                rules={[{ required: true, message: "Please input your email!" }, { type: 'email', message: "Please input a valid email!" }]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
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

              <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Confirm Password"
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
                  Sign Up
                </Button>
              </Form.Item>

              <Row justify="center">
                <Col>
                  <Text type="secondary">Already have an account? </Text>
                  <Text type="link" style={{ fontWeight: "bold" }}>Sign In</Text>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
