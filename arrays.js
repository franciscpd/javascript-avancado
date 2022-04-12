const pessoas = [
  {
    _id: "6254a5266c92229bd97d0384",
    isActive: true,
    age: 31,
    name: "Katrina Dickson",
    gender: "female",
    email: "katrinadickson@orbean.com",
    phone: "+1 (859) 466-3606",
    address: "461 Harkness Avenue, Century, Arizona, 7101",
    tags: [
      "commodo",
      "officia",
      "excepteur",
      "incididunt",
      "ad",
      "minim",
      "proident",
    ],
    friends: [
      {
        id: 0,
        name: "Potts Jacobs",
      },
      {
        id: 1,
        name: "Terrell Lawrence",
      },
      {
        id: 2,
        name: "Sawyer Cross",
      },
    ],
    favoriteFruit: "strawberry",
  },
  {
    _id: "6254a526a0a33b6b7954879c",
    isActive: false,
    age: 34,
    name: "Marlene Ochoa",
    gender: "female",
    email: "marleneochoa@orbean.com",
    phone: "+1 (977) 592-2168",
    address: "529 Lee Avenue, Yonah, West Virginia, 9545",
    tags: [
      "reprehenderit",
      "deserunt",
      "ut",
      "ex",
      "enim",
      "laboris",
      "nostrud",
    ],
    friends: [
      {
        id: 0,
        name: "Violet Murray",
      },
      {
        id: 1,
        name: "Brady Banks",
      },
      {
        id: 2,
        name: "Johnson Dawson",
      },
    ],
    favoriteFruit: "strawberry",
  },
  {
    _id: "6254a5267c0759888c9556d3",
    isActive: false,
    age: 25,
    name: "Ramos Graham",
    gender: "male",
    email: "ramosgraham@orbean.com",
    phone: "+1 (817) 577-2821",
    address: "700 Willoughby Avenue, Beason, Connecticut, 3216",
    tags: ["irure", "ad", "mollit", "incididunt", "dolor", "consequat", "duis"],
    friends: [
      {
        id: 0,
        name: "Pamela Good",
      },
      {
        id: 1,
        name: "Hillary Zamora",
      },
      {
        id: 2,
        name: "Lindsay Walters",
      },
    ],
    favoriteFruit: "apple",
  },
  {
    _id: "6254a526ce8ef46bc436682d",
    isActive: true,
    age: 36,
    name: "Eva Pacheco",
    gender: "female",
    email: "evapacheco@orbean.com",
    phone: "+1 (975) 453-2678",
    address: "441 Lake Avenue, Levant, Michigan, 3659",
    tags: ["do", "amet", "nostrud", "cupidatat", "do", "velit", "duis"],
    friends: [
      {
        id: 0,
        name: "Cruz Levy",
      },
      {
        id: 1,
        name: "Jordan Suarez",
      },
      {
        id: 2,
        name: "Mays Martinez",
      },
    ],
    favoriteFruit: "apple",
  },
  {
    _id: "6254a526ddf52be3e4aa15ab",
    isActive: false,
    age: 34,
    name: "Gill Castillo",
    gender: "male",
    email: "gillcastillo@orbean.com",
    phone: "+1 (847) 589-3592",
    address: "948 Lamont Court, Ernstville, Washington, 1245",
    tags: ["fugiat", "quis", "est", "est", "esse", "proident", "occaecat"],
    friends: [
      {
        id: 0,
        name: "Christian Guy",
      },
      {
        id: 1,
        name: "Karina Page",
      },
      {
        id: 2,
        name: "Karen Stevens",
      },
    ],
    favoriteFruit: "strawberry",
  },
  {
    _id: "6254a52685d3f9224aaaa554",
    isActive: true,
    age: 34,
    name: "Sarah Hinton",
    gender: "female",
    email: "sarahhinton@orbean.com",
    phone: "+1 (857) 524-3053",
    address: "822 Greenpoint Avenue, Harrison, Maine, 819",
    tags: [
      "amet",
      "reprehenderit",
      "consequat",
      "exercitation",
      "laboris",
      "proident",
      "exercitation",
    ],
    friends: [
      {
        id: 0,
        name: "Nancy Meadows",
      },
      {
        id: 1,
        name: "Karyn Burnett",
      },
      {
        id: 2,
        name: "Robbins Woods",
      },
    ],
    favoriteFruit: "apple",
  },
  {
    _id: "6254a52665680840299afb4d",
    isActive: true,
    age: 34,
    name: "Melissa Bradley",
    gender: "female",
    email: "melissabradley@orbean.com",
    phone: "+1 (801) 482-2853",
    address: "764 Brown Street, Wilmington, Oregon, 8068",
    tags: [
      "officia",
      "eu",
      "consectetur",
      "mollit",
      "cillum",
      "voluptate",
      "consequat",
    ],
    friends: [
      {
        id: 0,
        name: "Lucille Morgan",
      },
      {
        id: 1,
        name: "Medina Padilla",
      },
      {
        id: 2,
        name: "Day Young",
      },
    ],
    favoriteFruit: "apple",
  },
];
// Arrays methods

// const arrayDiversos = [
//   1, //0
//   2, //1
//   3, //2
//   4, //3
//   5, //4
//   "Francis", //5
//   "Taii", //6
//   { marca: "fiat", modelo: "Uno" }, //7
//   ["azul", "amarelo"], //8
// ];

// for (let i = 0; i < pessoas.length; i++) {
//   const pessoa = pessoas[i];

//   console.log(`${i} - ${pessoa.name}`);
// }

// Utilizado para percorrer os registros de um array
// pessoas.forEach((pessoa, index) => {
//   // console.log(`${index} - ${pessoa.name}`);
//   // pessoa.tags.forEach((tag) => console.log(tag));
// });

// Retorna uma nova lista
// const novaPessoas = pessoas.map((pessoa) => {
//   return {
//     nome: pessoa.name,
//     idade: pessoa.age,
//     opcao: pessoa.gender,
//   };
// });

// console.log(novaPessoas);

// const pessoasAtivas = pessoas.filter((pessoa) => {
//   return pessoa.isActive;
// });

// const pessoasInativas = pessoas.filter((pessoa) => {
//   return !pessoa.isActive;
// });

// console.log(pessoasAtivas.length);
// console.log(pessoasInativas.length);

// const pessoasQueMoramNoArizona = pessoas.filter((pessoa) => {
//   // return pessoa.tags.filter((tag) => tag === "commodo").length > 0;
//   return pessoa.address.toLowerCase().indexOf("461") != -1;
// });

// console.log(pessoasQueMoramNoArizona.length);

const indice = pessoas.findIndex((pessoa) => {
  return pessoa._id === "6254a526a0a33b6b7954879c";
});

console.log(indice);
console.log(pessoas.length);

pessoas.splice(indice, 1);

console.log(pessoas.length);
