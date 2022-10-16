const abas = document.querySelectorAll(".aba");

abas.forEach((aba => {

    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba);
        mostrarInformacoesAba(aba);

    })
}))

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");
}

function mostrarInformacoesAba(aba) {

    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idMinhasInformacoes = `informacao-${aba.id}`

    const informacaoSerMostrada = document.getElementById(idMinhasInformacoes);
    informacaoSerMostrada.classList.add("selecionado")
}