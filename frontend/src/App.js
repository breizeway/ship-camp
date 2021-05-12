import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

import Navigation from '../src/components/Navigation';
import HomePage from '../src/components/HomePage';
import Spots from '../src/components/Spots';
import Spot from '../src/components/Spot';
import LoginFormPage from '../src/components/LoginFormPage';
import SignupFormPage from '../src/components/SignupFormPage';
import User from '../src/components/User';
import MainContent from '../src/components/MainContent';
import UserRedirect from '../src/components/UserRedirect';
import * as sessionActions from './store/session';
import * as apiKeyActions from './store/apiKeys';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const userViews = useSelector(state => state.components.User.views)

  useEffect(async () => {
    await dispatch(sessionActions.restoreUser())
    await dispatch(apiKeyActions.getGoogleMaps())
    setIsLoaded(true)
  }, [dispatch]);

  const pathname = useLocation().pathname
  const isHome = pathname === '/'

  return isLoaded && (
    <>
      <div className='main-nav-wrapper'>
        <div
          className='main-nav'
          style={{
            maxWidth: !isHome && '100%',
            padding: !isHome && '0 30px',
            backgroundColor: !isHome && 'white',
          }}
        >
          <Navigation isLoaded={isLoaded}/>
        </div>
      </div>
      <MainContent>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/spots'>
            <Spots />
          </Route>
          <Route path='/spots/:id'>
            <Spot />
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/u/:username' exact={true}>
            <UserRedirect />
          </Route>
          <Route path='/u/:username/*'>
            <User />
          </Route>
        </Switch>
      </MainContent>
    </>
  );
}

export default App;
