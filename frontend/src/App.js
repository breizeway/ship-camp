import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from 'react-router-dom';

import Navigation from '../src/components/Navigation';
import HomePage from '../src/components/HomePage';
import Spots from '../src/components/Spots';
import LoginFormPage from '../src/components/LoginFormPage';
import SignupFormPage from '../src/components/SignupFormPage';
import * as sessionActions from "./store/session";

function App() {
  const isHome = useLocation().pathname === '/';

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  }, [dispatch]);

  return isLoaded && (
    <>
      <div className='main-nav-wrapper'>
        <div
          className='main-nav'
          style={{
            maxWidth: !isHome && '100%',
            padding: !isHome && '0 29px'
          }}
        >
          <Navigation isLoaded={isLoaded} isHome={isHome}/>
        </div>
      </div>
      <div className='main-view-wrapper'>
        <div className='main-view'>
          {isLoaded && (
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/spots/'>
                <Spots />
              </Route>
              <Route path='/login'>
                <LoginFormPage />
              </Route>
              <Route path='/signup'>
                <SignupFormPage />
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
