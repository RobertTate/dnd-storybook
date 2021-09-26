import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { FirebaseContext } from '../config/firebase'
import * as ROUTES from '../constants/routes';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
  error: null,
}

const SignInForm = () => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const { auth, signInWithEmailAndPassword } = useContext(FirebaseContext);
  let history = useHistory();

  const isInvalid = formState.password === '' || formState.email === '';

  const onFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, formState.email, formState.password)
    .then(() => {
      setFormState(INITIAL_FORM_STATE);
      history.push(ROUTES.HOME);
    }).catch(error => {
      setFormState((prevState) => {
        return {
          ...prevState,
          error
        }
      });
    });
  }

  const onFormChange = (event) => {
    setFormState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        name="email"
        value={formState.email}
        onChange={onFormChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={formState.password}
        onChange={onFormChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">Sign In</button>

      {formState.error && <p>{formState.error.message}</p>}
    </form>
  );
}

export default SignInForm;
