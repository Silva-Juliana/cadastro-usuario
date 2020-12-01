import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import NewUser from "./components/NewUser/NewUser"


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/newuser">
                    <NewUser/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}