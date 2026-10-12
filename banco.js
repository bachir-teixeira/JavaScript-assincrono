const pedidos = [{
  id: 1,
  produto: "camiseta",
  categoria: "roupas",
  valor:
  79.90,
  status: "entregue"
},
  {
    id: 2,
    produto: "notebook",
    categoria: "eletronicos",
    valor:
    3200.00,
    status: "entregue"
  },
  {
    id: 3,
    produto: "calça",
    categoria: "roupas",
    valor:
    129.90,
    status: "pendente"
  },
  {
    id: 4,
    produto: "mouse",
    categoria: "eletronicos",
    valor:
    59.90,
    status: "entregue"
  },
  {
    id: 5,
    produto: "camiseta",
    categoria: "roupas",
    valor:
    79.90,
    status: "cancelado"
  },
  {
    id: 6,
    produto: "tenis",
    categoria: "roupas",
    valor:
    249.90,
    status: "entregue"
  },
  {
    id: 7,
    produto: "notebook",
    categoria: "eletronicos",
    valor:
    3200.00,
    status: "pendente"
  },
  {
    id: 8,
    produto: "mouse",
    categoria: "eletronicos",
    valor:
    59.90,
    status: "entregue"
  },
];

const frutas = [{
  id: 1,
  nome: "maçã",
  cor: "vermelho",
  preco: 1.2
},
  {
    id: 2,
    nome: "banana",
    cor: "amarelo",
    preco: 0.9
  },
  {
    id: 3,
    nome: "uva",
    cor: "roxo",
    preco: 2.5
  },
];

const animais = [{
  id: 1,
  nome: "cão",
  tipo: "mamífero",
  patas: 4
},
  {
    id: 2,
    nome: "gato",
    tipo: "mamífero",
    patas: 4
  },
  {
    id: 3,
    nome: "tartaruga",
    tipo: "réptil",
    patas: 4
  },
];

const paises = [{
  id: 1,
  nome: "Portugal",
  capital: "Lisboa",
  continente: "Europa"
},
  {
    id: 2,
    nome: "Brasil",
    capital: "Brasília",
    continente: "América"
  },
  {
    id: 3,
    nome: "Japão",
    capital: "Tóquio",
    continente: "Ásia"
  },
];

const cores = [{
  id: 1,
  nome: "vermelho",
  hex: "#ff0000"
},
  {
    id: 2,
    nome: "azul",
    hex: "#0000ff"
  },
  {
    id: 3,
    nome: "verde",
    hex: "#00ff00"
  },
];

const carros = [{
  id: 1,
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
},
  {
    id: 2,
    marca: "Renault",
    modelo: "Clio",
    ano: 2018
  },
  {
    id: 3,
    marca: "BMW",
    modelo: "Série 3",
    ano: 2022
  },
];

const desportos = [{
  id: 1,
  nome: "futebol",
  jogadores: 11,
  bola: true
},
  {
    id: 2,
    nome: "natação",
    jogadores: 1,
    bola: false
  },
  {
    id: 3,
    nome: "basquetebol",
    jogadores: 5,
    bola: true
  },
];

const profissoes = [{
  id: 1,
  nome: "médico",
  area: "saúde",
  salario: 2500
},
  {
    id: 2,
    nome: "professor",
    area: "educação",
    salario: 1600
  },
  {
    id: 3,
    nome: "engenheiro",
    area: "tecnologia",
    salario: 2200
  },
];

const instrumentos = [{
  id: 1,
  nome: "guitarra",
  familia: "cordas",
  cordas: 6
},
  {
    id: 2,
    nome: "piano",
    familia: "teclas",
    cordas: 230
  },
  {
    id: 3,
    nome: "flauta",
    familia: "sopro",
    cordas: 0
  },
];

const dias = [{
  id: 1,
  nome: "segunda",
  fimDeSemana: false
},
  {
    id: 6,
    nome: "sábado",
    fimDeSemana: true
  },
  {
    id: 7,
    nome: "domingo",
    fimDeSemana: true
  },
];

const linguagens = [{
  id: 1,
  nome: "JavaScript",
  ano: 1995,
  tipo: "interpretada"
},
  {
    id: 2,
    nome: "Python",
    ano: 1991,
    tipo: "interpretada"
  },
  {
    id: 3,
    nome: "Go",
    ano: 2009,
    tipo: "compilada"
  },
];


const pessoas = [{
  id: 1,
  nome: "Ana Silva",
  idade: 28,
  cidade: "Lisboa"
},
  {
    id: 2,
    nome: "João Santos",
    idade: 34,
    cidade: "Porto"
  },
  {
    id: 3,
    nome: "Maria Costa",
    idade: 22,
    cidade: "Braga"
  },
  {
    id: 4,
    nome: "Pedro Oliveira",
    idade: 45,
    cidade: "Coimbra"
  },
  {
    id: 5,
    nome: "Sofia Ferreira",
    idade: 31,
    cidade: "Faro"
  },
]
export{
  frutas,
  animais,
  paises,
  cores,
  carros,
  desportos,
  profissoes,
  instrumentos,
  dias,
  linguagens, 
  pedidos
};