import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { FirebaseContext } from '../config/firebase'
import * as ROUTES from '../constants/routes';


const SignOutLink = () => {
  const [signOutError, setSignOutError] = useState(null);
  const { auth, signOut } = useContext(FirebaseContext);
  let history = useHistory();

  const onSignOut = () => {
    signOut(auth).then(() => {
      history.push(ROUTES.LANDING)
    }).catch((error) => {
      setSignOutError(error);
    });
  }

  return (
    <>
      <button type="button" onClick={onSignOut}>
        Sign Out
      </button>
      {signOutError && <p>{signOutError.message}</p>}
    </>
  )
}

export default SignOutLink;
