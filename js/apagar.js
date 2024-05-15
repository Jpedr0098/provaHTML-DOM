function apagar(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogadoresATT = jogadores.filter(jogador => jogador.id != id)

    localStorage.setItem("jogadores", JSON.stringify(jogadoresATT))

    window.location.reload()
}