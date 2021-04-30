import React from 'react';
import 'antd/dist/antd.css';
import { Redirect, Route, Switch } from 'react-router';
import { connect, Provider } from 'react-redux';

import { LoginPage } from './components/Login/Login';

import { initializeApp } from './redux/app-reducer';

import './App.css';
import Preloader from './common/Preloader/Preloader';
import { BrowserRouter, Link } from 'react-router-dom';


import store, { AppStateType } from './redux/redux-store';
import withSuspense from './hoc/withSuspense';
import { compose } from 'redux';
import { UsersPage } from './components/Users/UsersContainer';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { AppHeader } from './components/Header/Header';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type StatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendDialog = withSuspense(DialogsContainer);
const SuspendProfile = withSuspense(ProfileContainer);
const SuspendChat = withSuspense(ChatPage);

class App extends React.Component<StatePropsType & DispatchPropsType> {

  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initializeApp();

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <Layout>
        <AppHeader />

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                  <Menu.Item key="1"> <Link to='/profile'> Profile </Link> </Menu.Item>
                  <Menu.Item key="2"> <Link to='/dialogs'> Messages </Link> </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                  <Menu.Item key="5"><Link to='/users'> Users </Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Chats">
                  <Menu.Item key="9"><Link to='/chat'> Chat </Link></Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>

              <Switch>
                <Route exact path='/' render={() => <Redirect to='/profile' />} />

                <Route path='/profile/:userId?' render={() => <SuspendProfile />} />

                <Route path='/dialogs' render={() => <SuspendDialog />} />

                <Route path='/users' component={UsersPage} />

                <Route path='/login' render={() => <LoginPage />} />

                <Route path='/chat' render={() => <SuspendChat />} />


                <Route path='*' render={() => <div> 404 NOT FOUND </div>} />
              </Switch>

            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Kazhymukhan Yerkinov ©2020 Created by mengoi</Footer>
      </Layout>
    );
  }
}


let mapStateToProps = (state: AppStateType) => ({
  initialized: state.appPage.initialized,
})



let AppContainer = compose<React.ComponentType>(connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;
