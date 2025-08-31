import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';


const items: MenuProps['items'] = [
    {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

function DynamicDropDown(){
    return(
        <>
            <Dropdown className='d-flex align-items-center' menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Click me
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default DynamicDropDown;