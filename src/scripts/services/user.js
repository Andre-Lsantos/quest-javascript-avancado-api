import { baseURL } from '../variables.js'
 // aqui estou importando apenas a variavel baseurl para usar nesse arquivo.


async function getUser(userName) {
    const response = await fetch(`${baseURL}${userName}`)
    return await response.json()

    //${baseURL} é a variável que eu importei do arquivo variables.js que contém a url base da api do github.
    //aqui estou usando a variável baseURL para evitar repetição desnecessária.
}



export { getUser } // aqui estou exportando a função user para poder usar em outros arquivos.

