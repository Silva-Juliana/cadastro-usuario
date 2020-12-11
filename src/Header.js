import React from 'react'
import { Link, useHistory } from "react-router-dom";
import logo from './images/logo.png'
import './header.css'


const HeaderList=() => {
    let history = useHistory()

    const buttonLogout =() => {
        localStorage.removeItem('token')
        history.push('/login')
    }
   
    return (<>
        <div className='container_header'>
            <img className="image_logo_header" src={logo} alt="logo"/>
            <nav className="nav_header">
                <ul>
                    <li>
                        <Link className="New_user" to={`/form`}>Novo Usuário</Link>
                    </li>
                    <li>
                        <button onClick={buttonLogout} className="button_logout">Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    </>)
}

const HeaderForm=() => {
    let history = useHistory()

    const buttonLogout =() => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    
    return( <>
        <nav>
            <ul>
                <li>
                    <Link className="list_user_link"  to={`/list`}>Listagem</Link>
                </li>
                <li>
                    <button  onClick={buttonLogout} className="button_logout">Logout</button>
                </li>
            </ul>
        </nav>
    </>)
}

export {HeaderForm, HeaderList}