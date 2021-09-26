import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const SignUpLink = () => {
  return (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  )
};

export default SignUpLink;
