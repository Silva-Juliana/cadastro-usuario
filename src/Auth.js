
const isUserLogged = async () => {
    let token = localStorage.getItem('token')

    return fetch(`http://localhost:5000/usuarios?token=${token}`)
        .then(res=> {
            return res.json()
        })
}

function userLogin(credentials){ 

   return fetch(`http://localhost:5000/usuarios?email=${credentials.email}&password=${credentials.password}`)
    .then(res=> {
        return res.json()
    })
}

const setToken = (token) => {
    localStorage.setItem('token', token)
}

export {isUserLogged, userLogin, setToken};