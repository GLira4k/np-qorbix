import { Button, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import MainCard from "../MainCard"
import MainTable from "../MainTable"
import LoginRegister from "../../pages/LoginRegister"

function DynamicMainContent(){
    return(
        <>
            <Layout className="">
                <Content>
                    <div className="d-flex gap-2">
                        <MainCard className='w-50 m-2' content="Qr Code"/>
                        <MainCard className='w-50 m-2'  content="Encurtador de Link"/>
                    </div>
                    <div>
                        <MainTable className="m-2"/>
                        <LoginRegister />
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default DynamicMainContent;