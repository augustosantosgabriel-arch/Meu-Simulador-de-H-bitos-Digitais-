// Base de dados pronta fornecida no enunciado
const dadosPesquisa = {
    mediaNacionalDiaria: 4, // Média de horas que o brasileiro passa nas redes
    alertaSaude: 6,         // Limite recomendado por especialistas
    sugestoes: [
        { limite: 2, mensagem: "Parabéns! Seu uso está equilibrado. Você tem mais tempo livre para hobbies e descanso." },
        { limite: 5, mensagem: "Atenção. Você está na média nacional, mas já gasta quase um dia inteiro da sua semana olhando para a tela." },
        { limite: 24, mensagem: "Cuidado! Seu uso é considerado muito alto. Isso pode afetar seu sono, foco e saúde mental. Que tal um detox digital?" }
    ]
};

// Seleção dos elementos do HTML
const inputHoras = document.getElementById("horas");
const btnCalcular = document.getElementById("btnCalcular");
const divResultado = document.getElementById("resultado");

// Captura o clique no botão
btnCalcular.addEventListener("click", function() {
    // Ler o valor digitado
    const horasDiarias = Number(inputHoras.value);
    
    // Validação simples
    if (inputHoras.value === "" || horasDiarias < 0 || horasDiarias > 24) {
        divResultado.innerText = "Por favor, digite um número válido entre 0 e 24 horas.";
        return;
    }
    
    // Contas simples: horas por semana e por mês
    const horasSemanal = horasDiarias * 7;
    const horasMensal = horasDiarias * 30;
    
    // Comparação com a média nacional
    let comparacaoMedia = "";
    if (horasDiarias > dadosPesquisa.mediaNacionalDiaria) {
        comparacaoMedia = `Isso é mais do que a média nacional de ${dadosPesquisa.mediaNacionalDiaria} horas por dia.`;
    } else if (horasDiarias === dadosPesquisa.mediaNacionalDiaria) {
        comparacaoMedia = `Isso é exatamente a média nacional de ${dadosPesquisa.mediaNacionalDiaria} horas por dia.`;
    } else {
        comparacaoMedia = `Isso é menos do que a média nacional de ${dadosPesquisa.mediaNacionalDiaria} horas por dia.`;
    }
    
    // Buscar a mensagem reflexiva correspondente baseada nos limites
    let mensagemReflexiva = "";
    for (let item of dadosPesquisa.sugestoes) {
        if (horasDiarias <= item.limite) {
            mensagemReflexiva = item.mensagem;
            break;
        }
    }
    
    // Exibir na tela exatamente como na estrutura exigida
    divResultado.innerText = `Você passa ${horasSemanal} horas por semana nas redes sociais. ${comparacaoMedia} ${mensagemReflexiva}`;
});