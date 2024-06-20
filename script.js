const Caixaprincipal = document.querySelector(".caixa-principal");
const CaixaPerghuntas = document.querySelector(".caixa-perguntas");
const CaixaAlternativas = document.querySelector(".caixa-alternativas");
const CaixaResultado = document.querySelector(".caixa-resultados");
const TextoResultado = document.querySelector(".Texto-resultados");

const perguntas = [
    {
        enunciado: "Assinale a alternativa que NÃO apresenta um problema ambiental:",
        alternativas: [
            "Caça de diversos animais silvestres.",
            "Infiltração da água da chuva no solo."
        ]
    },
    {
        enunciado: "Qual conceito ligado ao meio ambiente defende a manutenção das características naturais do espaço natural, ou seja, sem nenhum tipo de intervenção antrópica?",
        alternativas: [
            "Conservação ambiental.",
            " Preservação ambiental."
        ]
    },
    {
        enunciado: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];