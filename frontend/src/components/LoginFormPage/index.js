import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as sessionActions from '../../store/session';

import './LoginFormPage.css'

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  if (sessionUser) history.push('/');

  const submitHandler = (e) => {
    e.preventDefault();

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async res => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        {validationErrors && validationErrors.map((error, idx) => (
          <p key={idx}>{error}</p>
        ))}
      </div>
      <form className='credential-form' onSubmit={submitHandler}>
        <div>
          <label htmlFor='credential'>Username or Email</label>
          <input
            type='text'
            value={credential}
            onChange={e => setCredential(e.target.value)}
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
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default LoginFormPage;
