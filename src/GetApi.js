

function getUsers(query = ''){
    let url = "http://localhost:5000/usuarios?_sort=nome&_order=asc"

    console.log(query)

    if(query) {
      url= url + '&q=' + query
    }

    return fetch(url , { method: 'GET'}) 
        .then(res=> {
            return res.json()
        })
       
}

export default getUsers;