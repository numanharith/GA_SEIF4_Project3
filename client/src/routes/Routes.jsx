import React from "react";
import {Switch, Route} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Routes() {
  return(
    <Switch>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signUp' component={SignUp}/>

    </Switch>
  )
}

export default Routes;