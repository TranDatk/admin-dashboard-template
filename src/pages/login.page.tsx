import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/auth.context';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const { user, login } = useAuth();
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const onFinish = async (values: any) => {
        if (!values.username || !values.password) {
            toast.error("Please input your username and password!")
        }
        try {
            setLoading(true);
            await login(values.username, values.password);
            navigate('/');
        } catch (error) {
            toast.error('Invalid username or password!', { position: "top-center", autoClose: 2000 });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;