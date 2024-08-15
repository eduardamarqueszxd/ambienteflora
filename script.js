const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assinale a alternativa que apresenta a melhor conceituação do termo meio ambiente:",
        alternativas: [
            {
                texto: " É a inter-relação entre os diversos componentes físicos e humanos",
                afirmacao: "Correta"
            },
            {
                texto: "É formado pelos elementos que foram construídos pela sociedade.",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: "Assinale a alternativa que NÃO apresenta um problema ambiental:",
        alternativas: [
            {
                texto: "Retirada da vegetação nativa local.",
                afirmacao: "Errada"
            },
            {
                texto: " Infiltração da água da chuva no solo.",
                afirmacao: "Correta"
            }
        ]
    },
    {
        enunciado: "Qual conceito ligado ao meio ambiente defende a manutenção das características naturais do espaço natural, ou seja, sem nenhum tipo de intervenção antrópica?",
        alternativas: [
            {
                texto: "Preservação ambiental.",
                afirmacao: "Corrreta"
            },
            {
                texto: "comunidade.",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de",
        alternativas: [
            {
                texto: "preservação ",
                afirmacao: "Errada"
            },
            {
                texto: " sustentabilidade.",
                afirmacao: "Correta"
            }
        ]
    },
    {
        enunciado: "Assinale a alternativa que apresenta uma característica do espaço ambiental brasileiro:",
        alternativas: [
            {
                texto: "Ocorrência de graves impactos ambientais no meio natural.",
                afirmacao: "Correta"
            },
            {
                texto: "Pequena diversidade geográfica do espaço físico local.",
                afirmacao: "Errada"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();