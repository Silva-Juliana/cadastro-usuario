import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
import List from "./components/list/List"
import Form from "./components/form/Form"
import EditUser from "./components/form/editUser/Edituser"
import ProtectRoute from "./ProtectRoute"


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route>
                    <ProtectRoute path="/list" component={List}/>
                    <ProtectRoute path="/form" component={Form}/>
                    <ProtectRoute path="/editUser/:id" component={EditUser}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}