const Masks = {
    cpf(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')

    }
}

const MasksCep = {
    cep(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    }
}

export {Masks, MasksCep};


// document.querySelectorAll('input').forEach(($input) => {
//     const field = $input.dataset.js

//     $input.addEventListener('input', (e) => {
//         e.target.value = Masks[field](e.target.value)
//     }, false)
// })