import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import MainCard from "../MainCard"
import MainTable from "../MainTable"

function DynamicMainContent(){
    return(
        <>
            <Layout>
                <Content>
                    <div className="d-flex gap-2">
                        <MainCard className='w-50 m-2' content="Qr Code"/>
                        <MainCard className='w-50 m-2'  content="Encurtador de Link"/>
                    </div>
                    <div>
                        <MainTable className="m-2"/>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default DynamicMainContent;