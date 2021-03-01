import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as sessionActions from '../../store/session';

import './index.css'

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);

  if (sessionUser) history.push('/');

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setValidationErrors(['Your password and your confirmed password must match.'])
    } else {
      return dispatch(sessionActions.signup({ email, username, password, firstName, lastName, image }))
      .catch(async res => {
          const data = await res.json();
          if (data && data.errors) setValidationErrors(data.errors);
      })
    }
  }

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className='credential-page'>
      <div className='credential-page__content'>
        <div className='credential-page__content-welcome'>Join Shipcamp</div>
        <div className='credential-page__content-phrase'>Discover the best camping (on ships) near you.</div>
        <div>
          {validationErrors && validationErrors.map((error, idx) => (
            <p key={idx}>{error}</p>
          ))}
        </div>
        <form className='credential-form' onSubmit={submitHandler}>
          <div>
            <input
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Email'
              required
            ></input>
          </div>
          <div>
            <input
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder='Username'
              required
            ></input>
          </div>
          <div>
            <input
              type='text'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder='First Name'
              required
            ></input>
          </div>
          <div>
            <input
              type='text'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder='Last Name'
              required
            ></input>
          </div>
          <div className='credential-form__upload-div'>
            <label>
              <input type="file" onChange={updateFile}></input>
            </label>
          </div>
          <div>
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              required
            ></input>
          </div>
          <div>
            <input
              type='password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
              required
            ></input>
          </div>
          <button type='submit' className='submit-button'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignupFormPage;
