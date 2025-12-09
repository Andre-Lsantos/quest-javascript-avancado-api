import { user } from '../objects/user.js'

const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser() {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="foto do perfil do usuario"/>
                
                <div class="data">
                    <h1>${user.avatarName ?? 'Nome não disponível 🥲'}</h1>
                    <p>${user.bio ?? 'Bio não possui'} 🥲</p>
                    <p><strong> 👤Login:</strong> ${user.userName}</p>
                    <p><strong> 👥Seguidores:</strong> ${user.followers} | <strong> Seguindo:</strong> ${user.following} </p>
                </div>
            </div>
        `;

        this.renderRepositories();
        this.renderEvents();
    },


    renderRepositories() {
        if (user.repositories.length === 0) return;
        // aqui estou verificando se o usuário não possui repositórios, se não possuir, a função retorna vazio e não executa o restante do código.

        let repositoriesItens = '';

        user.repositories.forEach(repo => {
            repositoriesItens += `
       <li class="repo-card">
        <strong class="repo-title">${repo.name}</strong>

        <div class="repo-badges">
            <span class="badge">🍴 ${repo.forks_count}</span>
            <span class="badge">⭐ ${repo.stargazers_count}</span>
            <span class="badge">👀 ${repo.watchers_count}</span>
            <span class="badge">👨‍💻 ${repo.language ?? 'N/A'}</span>
        </div>
    </li>
            `
            // aqui estou criando uma lista de repositórios com link para o repositório no GitHub junto com a classe dentro aparecendo as watchers, forks, stars e linguagem do repositório e um efeito.
        });

        this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>
        `;
        // aqui estou adicionando a lista de repositórios na tela.
    },

    renderEvents() {
        if (!user.events || user.events.length === 0) return;

        let eventsList = '';
        // Percorre os eventos do usuário e cria itens de lista para PushEvent e CreateEvent
        //reenderevents é um método que renderiza os eventos do usuário na tela.

        user.events.forEach(event => {
            if (event.type === "PushEvent") {
                const commitMessage = event.payload.commits ?
                    event.payload.commits[0].message :
                    "Sem mensagem de commit";

                eventsList += `
                    <li>
                        <strong>PushEvent:</strong> ${event.repo.name}
                        <p>${commitMessage}</p>
                    </li>
                `;
            }

            if (event.type === "CreateEvent") {
                eventsList += `
                    <li>
                        <strong>CreateEvent:</strong> ${event.repo.name}
                        <p>Sem mensagem de commit</p>
                    </li>
                `;
            }
        });

        this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Últimos eventos</h2>
                <ul>${eventsList}</ul>
            </div>
        `;
    }
}

export { screen }
