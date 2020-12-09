
function apiForm(cep = ''){
    let urlCep = "https://viacep.com.br/ws/"

    urlCep = urlCep + cep + "/json/"

    return fetch(urlCep , { method: 'GET'})
    .then(res=> {
        return res.json()
    })
}

export default apiForm;