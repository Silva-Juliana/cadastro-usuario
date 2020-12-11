function editUser(id, body){
    let idUser = ''

    if(id) {
        idUser = id
    }

    return fetch("http://localhost:5000/usuarios/" + idUser, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}


export default editUser;