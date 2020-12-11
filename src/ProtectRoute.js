import React, {useEffect, useState} from 'react'
import {Route, Redirect} from 'react-router-dom'
import * as Auth from './Auth'



const ProtectRoute = ({component: Component, ...rest}) => {
    const [isLogged, setIsLOgged] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Auth.isUserLogged().then((users) => {
            if(users.length > 0){
                setIsLOgged(true)
            }
            setLoading(false)
        })
    }, [])

    return (  
        <Route {...rest} render={(props) => {
            if(!loading) {
                if (isLogged){
                    console.log("AQIIIII")
                    return <Component {...props} />
                } else {
                    return <Redirect to={{pathname:'/login'}}/>
                }
            }
            return 'Loading...'
        }}/>
    )
}

export default ProtectRoute;