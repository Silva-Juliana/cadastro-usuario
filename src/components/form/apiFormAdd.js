function addUser(body){
    return fetch("http://localhost:5000/usuarios/", { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }) 
}

export default addUser;