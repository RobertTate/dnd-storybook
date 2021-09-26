import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import { AuthUserContext } from '../config/firebase';
import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const userState = useContext(AuthUserContext);

  return (
    <Route {...rest} render={(props) => {
      if (userState.userDataPresent) {
        if (userState.user) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={{
            pathname: ROUTES.SIGN_IN,
            state: { from: props.location }
          }} />
        }
      } else {
        return <p>Loading...</p>;
      }
    }} />
  )
}

export default PrivateRoute;
