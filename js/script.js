const cepInp = document.getElementById('cepInp');
const cepBtn = document.getElementById('cepBtn');
const cepEnd = document.querySelector('.cep');

cepBtn.addEventListener('click', handleClick);

function handleClick(){
    let cep = cepInp.value;
    searchCep(cep);
}

function searchCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body =>{
        cepEnd.innerText = body;
    })
}