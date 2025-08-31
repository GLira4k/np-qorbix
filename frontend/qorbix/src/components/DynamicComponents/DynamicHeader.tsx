import { Content } from 'antd/es/layout/layout';
import { Header } from 'antd/es/layout/layout';
import DynamicDropDown from '../DropDown';

function DynamicHeader(){
    return(
        <>
            <Header>
                <Content className='d-flex align-items-center justify-content-between'>
                    <div className='bg-primary rounded-circle w-'>
                        logo
                    </div>
                    <p className='text-light'>
                        Header
                    </p>
                    <DynamicDropDown />
                </Content>
            </Header>
        </>
    )
}

export default DynamicHeader;