function somarGol(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)

    jogador.gols++

    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location.reload()
}

function subtrairGol(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)

    jogador.gols--

    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location.reload()  
}

function somarAssistencia(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)

    jogador.assistencias++

    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location.reload()
}

function subtrairAssistencia(id){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(jogador => jogador.id == id)

    jogador.assistencias--

    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location.reload()
    
}