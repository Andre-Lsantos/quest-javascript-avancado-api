# Quest JavaScript Avançado — Consumindo a API do GitHub

Projeto feito para praticar **JavaScript avançado** consumindo a **API pública do GitHub** e renderizando as informações do usuário na tela (perfil, repositórios e eventos).

## Visão geral

A aplicação recebe um **username do GitHub** e busca dados em 3 endpoints principais:

- **Usuário (perfil):** `https://api.github.com/users/{username}`
- **Repositórios:** `https://api.github.com/users/{username}/repos`
- **Eventos (atividades):** `https://api.github.com/users/{username}/events`

Depois das requisições, o app **organiza os dados em um objeto `user`** e **renderiza no HTML** usando o objeto `screen`.

---

## O que foi feito / Implementado

### 1) Busca de usuário via input + botão
No arquivo principal, existe um listener no botão `#btn-search` que pega o valor do input e dispara a busca.

- Arquivo: `src/scripts/index.js`
- Responsabilidade: controlar a interação do usuário e chamar as funções de serviço.

### 2) Busca ao pressionar ENTER
Além do botão, também foi adicionado o evento de teclado no input para buscar ao apertar **ENTER**.

- Arquivo: `src/scripts/index.js`
- Melhoria: UX mais rápida (não precisa clicar no botão).

### 3) Validação de campo vazio
Foi criada a função `validateEmpty(userName)` para impedir requisições quando o input estiver vazio, exibindo um `alert`.

- Arquivo: `src/scripts/index.js`
- Motivo: evitar chamadas desnecessárias à API e melhorar a experiência.

### 4) Separação por responsabilidades (organização do código)
O projeto foi dividido em camadas para deixar o código mais organizado:

- **Services:** fazem as requisições para a API  
  - `src/scripts/services/user.js` (perfil do usuário)
  - `src/scripts/services/repositories.js` (repositórios)
  - `src/scripts/services/events.js` (eventos)

- **Objects:** armazenam e manipulam dados e renderização  
  - `src/scripts/objects/user.js` (objeto que guarda info, repositórios e eventos)
  - `src/scripts/objects/screen.js` (responsável por renderizar o usuário na tela)

- **Entry point:** orquestra tudo  
  - `src/scripts/index.js`

Essa separação facilita manutenção, leitura e evolução do projeto.

---

## O que foi adicionado e aprimorado

### Centralização de configurações (evita repetição)
Foi criado o arquivo com variáveis reutilizáveis, como:

- `baseURL = 'https://api.github.com/users/'`
- `repositoriesQuantity = 10` (quantidade de repositórios a exibir)

- Arquivo: `src/scripts/variables.js`

Isso melhora o código porque:
- evita “strings mágicas” espalhadas,
- facilita trocar a quantidade de repositórios em um único lugar,
- mantém o projeto mais consistente.

### Uso de funções assíncronas (async/await)
A função `getUserData(userName)` busca **usuário, repositórios e eventos**, aguarda as respostas e só depois monta o objeto final para renderizar:

- Arquivo: `src/scripts/index.js`
- Fluxo:
  1. `getUser(userName)`
  2. `getRepositories(userName)`
  3. `getUserEvents(userName)`
  4. `user.setInfo(...)`, `user.setRepositores(...)`, `user.setEvents(...)`
  5. `screen.renderUser(user)`

---

## Estrutura do projeto (resumo)

- `index.html` (página principal)
- `src/`
  - `css/` (estilos)
  - `scripts/`
    - `index.js` (entrada e eventos de UI)
    - `variables.js` (configurações/constantes)
    - `services/` (requisições à API)
    - `objects/` (model e renderização)

---

## Como usar

1. Abra o projeto no navegador (ex.: `index.html`).
2. Digite um username do GitHub (ex.: `octocat`).
3. Clique em **Buscar** ou pressione **ENTER**.
4. Veja os dados renderizados na tela.

---

## Observações

- A API pública do GitHub possui limites de requisição (rate limit) quando não autenticada.
- O projeto foi estruturado para ser fácil de evoluir (ex.: adicionar paginação, favoritos, cache, loading, tratamento de erros mais robusto etc.).
