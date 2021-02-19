import { Switch, Route } from 'react-router-dom';

import LoginFormPage from '../src/components/LoginFormPage';

function App() {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
