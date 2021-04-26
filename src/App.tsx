import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { connect, Provider } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

import { initializeApp } from './redux/app-reducer';

import './App.css';
import Preloader from './common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';


import store, { AppStateType } from './redux/redux-store';
import withSuspense from './hoc/withSuspense';
import { compose } from 'redux';



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type StatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendDialog = withSuspense(DialogsContainer);
const SuspendProfile = withSuspense(ProfileContainer);

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
      <div className = 'app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className = 'app-wrapper-content'>
          <Switch>
            <Route exact path = '/' render = {() => <Redirect to = '/profile' /> } />
            
            <Route path = '/profile/:userId?' render = {() => <SuspendProfile /> } />

            <Route path = '/dialogs' render = {() => <SuspendDialog /> } />

            <Route path = '/users' component = { UsersContainer } />

            <Route path = '/login' render = { () => <Login /> } />

            <Route path = '*' render = {() => <div> 404 NOT FOUND </div> } />
          </Switch>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  initialized: state.appPage.initialized,
})



let AppContainer =  compose<React.ComponentType>(connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store = { store }>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;
