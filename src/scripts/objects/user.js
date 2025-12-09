const user = {
    avatarUrl: '',
    avatarName: '',
    bio: '',    
    userName: '',
    repositories: [],
    followers: 0,
    following: 0,
    events: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.avatarName = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.events = gitHubUser.public_events

    },
    setRepositores(repositories) {
        this.repositories = repositories
},  
     setEvents(events) {
        // filtrar apenas PushEvent e CreateEvent
        const filteredEvents = events.filter(event =>
            event.type === "PushEvent" || event.type === "CreateEvent"
        );

        // guardar máximo de 10 eventos
        this.events = filteredEvents.slice(0, 10);
    }
  

}

export { user }
// aqui estou criando um objeto chamado user que vai armazenar as informações do usuário buscado na API do GitHub, como avatarUrl, avatarName, bio, userName e repositories. E também estou criando dois métodos: setInfo e setRepositories para atualizar as informações do usuário e os repositórios respectivamente.