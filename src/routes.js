import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import NewUser from "./components/NewUser/NewUser"
import List from "./components/list/List"
import Form from "./components/form/Form"
import Formadd from "./components/form/editUser/edituser"


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
                <Route path="/list">
                    <List/>
                </Route>
                <Route path="/form">
                    <Form/>
                </Route>
                <Route path="/formadd">
                    <Formadd/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}