export default function MontaUsuario(dadosUsuario,dadosRep){
    const repos = dadosRep.map(repositorio=>{
        return {
            name:repositorio.name,
            url:repositorio.html_url
        }
    })
    return ({
        avatar_url:dadosUsuario.avatar_url,
        login:dadosUsuario.login,
        nome:dadosUsuario.name,
        perfil_url:dadosUsuario.html_url,
        reps_publicos:dadosUsuario.public_repos,
        seguidores:dadosUsuario.followers,
        bio:dadosUsuario.bio,
        repos
        })
}