const fs = require("fs");

const rawData = fs.readFileSync("exemplo.json");

const pessoas = JSON.parse(rawData);

const novaPessoa = {
  ...pessoas[0],
  nome: "Francisco",
  email: "email@qualquer.com",
};

pessoas.push(novaPessoa);

fs.writeFileSync("exemplo.json", JSON.stringify(pessoas));

// console.log(pessoas);
