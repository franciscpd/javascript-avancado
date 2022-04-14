// const pessoas = require("./exemplo.json");

// console.log(pessoas);

// Objects methods
const pessoa = {
  nome: "Francisross Soares de Oliveira",
  idade: 33,
  email: "franciscpd@gmail.com",
  endereco: "",
  temDog: true,
};

// const pessoa = require("./exemplo.json");

const pessoaArray = [
  "Francisross Soares de Oliveira",
  33,
  "franciscpd@gmail.com",
  "",
  true,
];

// Desestruturação
// const [nome, idade, email, endereco, temDog] = pessoaArray;

const logPeople = (people) => {
  const { nome, email, cpf } = people;

  console.log(nome, email, cpf);
};

// logPeople(pessoa);

// Spread operator
const novaPessoa = {
  ...pessoa,
  nome: "Francisco",
  email: "email@qualquer.com",
};

const novaPessoaJson =
  '{"nome":"Francisco","idade":33,"email":"email@qualquer.com","endereco":"","temDog":true}';

// console.log(JSON.parse(novaPessoaJson).nome);
