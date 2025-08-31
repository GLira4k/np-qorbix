import { Footer, Content } from "antd/es/layout/layout"

function DynamicFooter(){
    return(
        <>
            <Footer>
                <Content className="d-flex justify-content-center">
                    Qorbix ©{new Date().getFullYear()} Created by GLira
                </Content>
            </Footer>
        </>
    )
}

export default DynamicFooter;