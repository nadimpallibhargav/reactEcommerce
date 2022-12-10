import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './header.scss';

function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
}

const items = [    
    getItem('Vegitables', 'vegitables', [
      getItem('Tomoto', 'tomoto'),
    ]),
    getItem('Fruits', 'fruits', [
      getItem('Apple', ''),
    ]),
];

export const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    MyBazaar
                </div>
                <Menu mode="horizontal">
                    <Menu.SubMenu key="SubMenu" title="Shop By Category" icon={<MenuOutlined />}>
                        <Menu
                            mode="vertical"
                            items={items}
                        />
                    </Menu.SubMenu>
                </Menu>
            </div>
        </header>
    )
}