import { getUser } from '/src/scripts/services/user.js'
// aqui estou importando a função user do arquivo user.js para poder usar nesse arquivo.
import { getRepositories } from '/src/scripts/services/repositories.js'
// aqui estou importando a função repositories do arquivo repositories.js para poder usar nesse arquivo e renomeando ela para repositories.

import { getUserEvents } from '/src/scripts/services/events.js'


import { user } from '/src/scripts/objects/user.js'

import { screen } from '/src/scripts/objects/screen.js'





document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
   if(validateEmpty(userName)) return // aqui estou chamando a função validateEmpty para validar o campo de input do nome de usuário.
    getUserData(userName)
    //criei um if para verificar se o campo do usuario está vazio, se estiver vazio ele retorna e não executa a função getUserData.
})


// aqui estou criando uma mensagem de validação para o campo de input do nome de usuário.
function validateEmpty(userName){
     if(userName.length === 0){
        alert('Preencha o campo com um nome de usuário do GitHub')
        return true // aqui estou retornando true para indicar que o campo de input está vazio.
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    


    if (isEnterKeyPressed) {
        validateEmpty(userName)
        getUserData(userName)
       
    }
})

 async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getUserEvents(userName)

    user.setInfo(userResponse)
    user.setRepositores(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)





  



 

    
}


