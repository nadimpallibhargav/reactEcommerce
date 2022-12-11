import React from 'react';
import { Menu, Input, Row, Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './header.scss';

function getItem(label, key, items, type) {
    return {
      key,
      items,
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

const { Search } = Input;

const onSearch = (value) => console.log(value);

export const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    MyBazaar
                </div>
                <Row>
                    <Col 
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        lg={{
                            span: 12,
                        }}
                        md={{
                            span: 12,
                        }}
                    >                                              
                        <Menu mode="horizontal">
                            <Menu.SubMenu key="SubMenu" title="Shop By Category" icon={<MenuOutlined />}>
                                <Menu
                                    mode="vertical"
                                    items={items}
                                />
                            </Menu.SubMenu>
                        </Menu>                        
                    </Col>
                    <Col 
                        xs={{
                            span: 24,
                        }}
                        sm={{
                            span: 24,
                        }}
                        lg={{
                            span: 12,
                        }}
                        md={{
                            span: 12,
                        }}
                    >                        
                        <Search placeholder="Search for a Product" onSearch={onSearch} enterButton />
                    </Col>
                </Row>
            </div>
        </header>
    )
}