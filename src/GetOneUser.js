function GetOneUser (id){

    return fetch("http://localhost:5000/usuarios/" + id, { method: 'GET'})
    .then(res=> {
        return res.json()
    })
}

export default GetOneUser ;