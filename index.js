import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NewSubmit from "./newSubmit";
import List from "./list";
import Login from "./login";
import Admin from "./admin";
import Table from './table'

import "antd/dist/antd.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/login"> <Login /> </Route> 
        <Route exact path="/newsubmit"> <NewSubmit /> </Route> 
        <Route path="/list"> <List /> </Route> 
        <Route path="/admin"> <Admin /> </Route>  
        <Route path="/table"> <Table /> </Route>  
      </Switch>
    </BrowserRouter>
);
