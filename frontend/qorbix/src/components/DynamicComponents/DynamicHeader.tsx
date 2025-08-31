import { Content } from 'antd/es/layout/layout';
import { Header } from 'antd/es/layout/layout';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MainDropDown from '../MainDropDown';

function DropdownContent(){
    return(
        <>

            <div className='d-flex align-items-center gap-1'>                
                <Avatar size="large" icon={<UserOutlined />} />
                <p>Usuário</p>
            </div>
        </>
    )
}

function DynamicHeader(){
    return(
        <>
            <Header className='d-flex align-items-center justify-content-center h-25'>
                <Content className='d-flex align-items-center justify-content-between'>
                    <div className='bg-primary rounded-circle w-'>
                        logo
                    </div>
                    <MainDropDown 
                    content={<DropdownContent />}
                    />
                </Content>
            </Header>
        </>
    )
}

export default DynamicHeader;