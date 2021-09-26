import { Link } from 'react-router-dom';
import { useContext } from 'react';

import * as ROUTES from '../constants/routes';
import { AuthUserContext } from '../config/firebase'
import SignOutLink from './SignOutLink';

const Navigation = () => {
  const userState = useContext(AuthUserContext);

  return (
    <div>
      {
        userState.userDataPresent ? 
        ( userState.user ? <NavigationAuth /> : <NavigationNonAuth /> ) :
        <p>Loading...</p> 
      }
    </div>
  )
};

const NavigationAuth = () => {
  return (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutLink />
      </li>
    </ul>
  )
}

const NavigationNonAuth = () => {
  return (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  )
}

export default Navigation;
