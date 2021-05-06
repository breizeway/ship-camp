import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as sessionActions from '../../store/session';

import './index.css'

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
        // todo: display val errors better
      })
  }

  const demoUser = () => dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }));

  return (
    <div className='credential-page'>
      <div className='credential-page__content'>
        <div className='credential-page__content-welcome'>Welcome back!</div>
        <div className='credential-page__content-phrase'>Let's get you on a ship again.</div>
        <div>
          {validationErrors && validationErrors.map((error, idx) => (
            <p key={idx}>{error}</p>
          ))}
        </div>
        <form className='credential-form' onSubmit={submitHandler}>
          <div>
            <input
              type='text'
              value={credential}
              onChange={e => setCredential(e.target.value)}
              placeholder='Email or username...'
              required
            ></input>
          </div>
          <div>
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password...'
              required
            ></input>
          </div>
          <div>
            <button type='submit' className='submit-button'>Log In</button>
          </div>
          <div>
            <button onClick={demoUser} className='demo-button'>Demo User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginFormPage;
