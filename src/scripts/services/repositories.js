import { baseURL, repositoriesQuantity } from '../variables'  // aqui estou importando as variaveis baseURL e repositoriesQuantity do arquivo variables.js para poder usar nesse arquivo.



async function getRepositories (userName) {
    const response = await fetch(`${baseURL}${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
    // aqui estou usando a variável repositoriesQuantity para definir a quantidade de repositórios que quero pegar da api do github.
    
}


export{ getRepositories  } // aqui estou exportando a função repos para poder usar em outros arquivos e para que eu possa usar la no index.js.
