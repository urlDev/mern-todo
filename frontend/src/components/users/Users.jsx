import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';

const Users = () => {
  return (
    <Switch>
      <Route exact path="/users" component={SignIn} />
      <Route path="/users/signin" component={SignIn} />
      <Route path="/users/signup" component={SignUp} />
    </Switch>
  );
};

export default Users;
