import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import PrivateRoute from './components/PrivateRoute';
import { FirebaseContext, AuthUserContext } from './config/firebase'
import Navigation from './components/Navigation';
import LandingPage from './pages/Landing';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import PasswordForgetPage from './pages/PasswordForget';
import HomePage from './pages/Home';
import AccountPage from './pages/Account';
import AdminPage from './pages/Admin';

import * as ROUTES from './constants/routes';

const App = () => {
  const [userState, setUserState] = useState({
    userDataPresent: false,
    user: null,
    listener: null
  });

  const { auth, onAuthStateChanged } = useContext(FirebaseContext);

  useEffect(() => {
    if (userState.listener === null) {
      setUserState((prevUserState) => {
        return {
          ...prevUserState,
          listener: onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
              setUserState((prevUserState) => {
                return {
                  ...prevUserState,
                  userDataPresent: true,
                  user: authUser
                }
              });
            } else {
              setUserState((prevUserState) => {
                return {
                  ...prevUserState,
                  userDataPresent: true,
                  user: null
                }
              });
            }
          })
        }
      })
    }
    return () => {
      if (userState.listener) {
        userState.listener();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthUserContext.Provider value={userState}>
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <PrivateRoute path={ROUTES.HOME} component={HomePage} />
        <PrivateRoute path={ROUTES.ACCOUNT} component={AccountPage} />
        <PrivateRoute path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
    </AuthUserContext.Provider>
  );
}

export default App;
