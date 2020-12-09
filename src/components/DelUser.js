function DelUser(id){

    let idUser = ''

    if(id) {
        idUser = id
    }

    return fetch("http://localhost:5000/usuarios/" + idUser, { method: 'DELETE'}) 
}

export default DelUser;