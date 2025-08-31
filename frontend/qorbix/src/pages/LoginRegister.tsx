import { Layout, Input, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainCard from "../components/MainCard";

function LoginRegisterContent(){
    return(
        <>
            <Content className="d-flex flex-column gap-3 align-items-center">
                <h1>Login</h1>
                <Input 
                placeholder="Login"
                prefix={<UserOutlined />}
                />
                <Input 
                placeholder="Senha"
                prefix={<LockOutlined />}
                />
                <Button type="primary" block>
                    Login
                </Button>
            </Content>
        </>
    )
}

function LoginRegister(){
    return(
        <>
            <Layout className="d-flex align-items-center ">
                <Content className="">
                    <MainCard 
                    content={<LoginRegisterContent/>}
                    />
                </Content>
            </Layout>
        </>
    )
}

export default LoginRegister;