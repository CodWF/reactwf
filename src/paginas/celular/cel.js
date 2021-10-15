function time()
{
// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora =zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());

    // Exibe na tela usando a div#data-hora
    document.getElementById('hora').innerHTML = dataHora;
}, 1000);
}