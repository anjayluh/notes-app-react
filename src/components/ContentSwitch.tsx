import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "../modules/commit/Home"
import { localRoutes } from '../utils/constants';


const ContentSwitch = () => {
  
  return (
    <Switch>
      <Route path={localRoutes.notes} component={Home}></Route>
    </Switch>
  );
};

export default ContentSwitch;