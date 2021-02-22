import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from 'react-router-dom';

import HomePage from '../src/components/HomePage';
import LoginFormPage from '../src/components/LoginFormPage';
import SignupFormPage from '../src/components/SignupFormPage';
import Navigation from '../src/components/Navigation';
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  }, [dispatch]);

  return isLoaded && (
    <>
      <div className='main-nav-wrapper'>
        <div className='main-nav'>
          <Navigation isLoaded={isLoaded}/>
        </div>
      </div>
      <div className='main-view-wrapper'>
        <div className='main-view'>
          {isLoaded && (
            <Switch>
              <Route exact path='/'>
                <HomePage />
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
