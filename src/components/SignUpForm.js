import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { FirebaseContext } from '../config/firebase'
import * as ROUTES from '../constants/routes';

const INITIAL_FORM_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const SignUpForm = () => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const {
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile
  } = useContext(FirebaseContext);
  let history = useHistory();

  const isInvalid = (
    formState.passwordOne !== formState.passwordTwo ||
    formState.passwordOne === '' ||
    formState.email === '' ||
    formState.username === ''
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, formState.email, formState.passwordOne)
      .then((authUser) => {
        updateProfile(auth.currentUser, {
          displayName: formState.username
        }).catch((error) => {
          setFormState((prevState) => {
            return {
              ...prevState,
              error
            }
          });
        });

        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('Email Sent!');
          }).catch((error) => {
            setFormState((prevState) => {
              return {
                ...prevState,
                error
              }
            });
          });
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
        name="username"
        value={formState.username}
        onChange={onFormChange}
        type="text"
        placeholder="Username"
      />
      <input
        name="email"
        value={formState.email}
        onChange={onFormChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={formState.passwordOne}
        onChange={onFormChange}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={formState.passwordTwo}
        onChange={onFormChange}
        type="password"
        placeholder="Confirm Password"
      />

      <button disabled={isInvalid} type="submit">Sign Up</button>

      {formState.error && <p>{formState.error.message}</p>}
      {formState.emailSent && <p>Verification Email Has Been Sent!</p>}
    </form>
  );
}

export default SignUpForm;
