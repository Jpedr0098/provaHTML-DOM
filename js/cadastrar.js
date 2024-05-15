document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const jogador = {
        id: new Date().getTime(),
        nome: document.querySelector("#nome").value,
        time: document.querySelector("#time").value,
        nota: document.querySelector("#nota").value,
        gols: document.querySelector("#gols").value,
        assistencias: document.querySelector("#assistencias").value,
        foto: document.querySelector("#foto").value
    }

    console.log(jogador)

    salvar(jogador)
})

function salvar(jogador){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores",JSON.stringify(jogadores))
    window.location.href = "index.html"
}