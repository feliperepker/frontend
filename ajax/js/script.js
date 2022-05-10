const url ='https://api.github.com/users'
// let user = 'feliperepker'
const main = document.getElementById('main')
let text = ''

function getUser(user){
    fetch(`${url}/${user}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json; charset=UTF-8'
        }
    }
        .then((response) => response.json())
        .then((data)=> {
            text += `${data.name} possui ${data.public_repos} repositorios no GitHub como ${data.login}<br>`
            main.innerHTML = text
        })
        .catch((error) => console.error('Erro: ', error.message || error))

}
const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})

