import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as sessionActions from '../../store/session';

import './SignupFormPage.css'

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  if (sessionUser) history.push('/');

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setValidationErrors(['Your password and your confirmed password must match.'])
    } else {
      return dispatch(sessionActions.signup({ email, username, password }))
      .catch(async res => {
          const data = await res.json();
          if (data && data.errors) setValidationErrors(data.errors);
      })
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {validationErrors && validationErrors.map((error, idx) => (
          <p key={idx}>{error}</p>
        ))}
      </div>
      <form className='credential-form' onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignupFormPage;
