// const nome = "Francis";
// const idade = 33;
// const eCasado = true;

// const francis = {
//   nome: "Francis",
//   idade: 33,
//   eCasado: true,
// };

// const pessoas = ["Francis", "Maria", "Jose"];

// for (let i = 0; i < pessoas.length; i++) {
//   console.log(pessoas[i]);
// }

// let texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//   In accumsan, enim in volutpat lobortis, mauris mi consectetur quam,
//   faucibus placerat erat nisl id sapien. Aenean eleifend vestibulum
//   sapien, vel ornare felis posuere in. Praesent non pellentesque nibh.
//   Sed dapibus neque nec porttitor sollicitudin. Sed ac rhoncus purus.
//   Nulla convallis eros eget risus rutrum pulvinar. Proin sed velit ante.
//   Sed scelerisque orci eu turpis dapibus, in iaculis magna commodo.
//   Sed gravida tortor nec mattis ornare. Pellentesque ullamcorper
//   tincidunt nisl. Fusce tristique fermentum neque, nec semper risus
//   euismod in. Nunc placerat at mauris in dictum. Curabitur vel nulla a
//   tellus feugiat congue vitae ac magna. In maximus leo lacinia lobortis
//   consectetur.`;

// function tabuada(numeral) {
//   let result = [];
//   for (let i = 1; i <= 10; i++) {
//     // result.push(numeral + "x" + i + ": " + numeral * i);
//     result.push(`${numeral}x${i}: ${numeral * i}`);
//   }

//   return result;
// }

// const tabuada = (numeral) => {
//   let result = [];
//   for (let i = 1; i <= 10; i++) {
//     // result.push(numeral + "x" + i + ": " + numeral * i);
//     result.push(`${numeral}x${i}: ${numeral * i}`);
//   }

//   return result;
// };

// console.log(tabuada(9).join("\n"));

// cond && cond || ? resultado se for verdadeiro : resultado se for falso / else

// const podeDirigir = (idade, voceBebeu = false) => {
//   // const isMaiorDeIdadeENaoBebeu = () => idade >= 18 && voceBebeu === false;

//   return `Você ${
//     !(idade >= 18 && voceBebeu === false) ? "não " : ""
//   }pode dirigir`;
//   // if (idade >= 18) {
//   //   return "Você pode dirigir";
//   // }

//   // return "Você não pode dirigir";
// };

// console.log(podeDirigir(15));

const submenu = (label) => {
  // let retornoSubMenu;
  switch (label) {
    case "cliente":
      return "Cadastrar cliente";
    // break;
    default:
      return "Cadastrar professor";
  }
  // return retornoSubMenu;
};

const menu = (option, label) => {
  // let retorno;

  // if (option === 0) {
  //   retorno = "Sair do sistema";
  // } else if (option === 1) {
  //   retorno = "Cadastrar professor";
  // } else {
  //   retorno = "Informe uma opção válida";
  // }
  switch (option) {
    case 0:
    case 7:
      return "Sair do sistema";
    case 1:
      return submenu(label);
    default:
      return "Informe uma opção válida";
  }

  // return retorno;
};

console.log(menu(1, "cliente"));
