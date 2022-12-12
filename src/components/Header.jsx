import React from 'react';
import { Input, Row, Col, Button, Dropdown, Space } from 'antd';
import { MenuOutlined, ShoppingCartOutlined, FileDoneOutlined, UserOutlined } from '@ant-design/icons';
import './header.scss';

const items = [
    {
      key: '1',
      label: 'Vegitables',
      children: [
        {
          key: '1-1',
          label: 'Carrot',
        },
        {
          key: '1-2',
          label: 'Beans',
        },
      ],
    },
    {
      key: '2',
      label: 'Fruits',
      children: [
        {
          key: '2-1',
          label: 'Apple',
        },
        {
          key: '2-2',
          label: 'Bannana',
        },
      ],
    },
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
                <Row justify='space-between' align='middle'>
                    <Col span={3}>                                              
                        <Dropdown
                            menu={{
                            items,
                            }}
                        >
                            <Button onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <MenuOutlined />
                                    Shop By Category                                    
                                </Space>
                            </Button>
                        </Dropdown>                       
                    </Col>
                    <Col span={12}>                        
                        <Search placeholder="Search for a Product" onSearch={onSearch} height='auto' />
                    </Col>
                    <Col span={2}>
                        <Button type='text'>
                            <FileDoneOutlined /> My Orders
                        </Button>                        
                    </Col>
                    <Col span={3}>
                        <Button type='text'>
                            <ShoppingCartOutlined /> No Items In the Bag
                        </Button>                        
                    </Col>
                    <Col span={3}>
                        <Button type='text'>
                            <UserOutlined /> Log In/Sign Up
                        </Button>
                    </Col>
                </Row>
            </div>
        </header>
    )
}