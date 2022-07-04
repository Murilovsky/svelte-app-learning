function BuscaUsuario(usuario){
    return fetch(`https://api.github.com/users/${usuario}`)
}
function BuscaReps(usuario){
    return fetch(`https://api.github.com/users/${usuario}/repos?sort=pushed&per_page=5`)
}
export {BuscaUsuario,BuscaReps}