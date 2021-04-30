import React from 'react';

import { Link } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';
import { Button, Col, Menu, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selector';
import { logout } from '../../redux/auth-reducer';





export const AppHeader: React.FC = () => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  return (
    <Header className="header">
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to='/users'> Developers </Link></Menu.Item>
          </Menu>
        </Col>
        {isAuth
        ? <React.Fragment>
            <Col span={1}>
              <Avatar alt = {login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />    
            </Col>
            <Col span = {5}>
              <Button onClick = {logoutCallback}> Log out </Button> 
            </Col>
        </React.Fragment>

        :<Col>
          <Button>
            <Link to = {`/login`}> Login </Link>
          </Button>
        </Col>}
      </Row>
    </Header>
  )
}

