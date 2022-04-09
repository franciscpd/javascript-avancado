// Precisamos armazenar o nome da empresa, e sempre que for executado o
// sistema ( Execução do arquivo index.js) deve exibir no console esse nome.
// Essa informação nunca deve ser alterada durante o uso do sistema.
const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

// Precisamos armazenar a lista de receitas em nosso sistema chamada
// receitas: Para isso iremos usar o recurso de Arraysdo Javascript. Essa lista
// deve ter acesso global para todas as funcionalidades do sistema.
// Deixaremos previamente deixar cadastrada uma receita dentro da nossa
// lista de receitas, o cliente deixará livre a escolha de qual receita será. Além
// disso, uma receita será representada por umobjeto e deverá ter os
// seguintes atributos:
//  a. Um identificador único que não pode se repetir no sistema
//  b.titulo da receita
//  c. nível dificuldade ( com a escala de simples, moderada e complexa)
//  d. lista de ingredientes já com a medida (Ex: 1 colher de açúcar)
//  e. instruções de preparo
//  f. link do video de preparo
//  g. se é vegana ou não
let listaDeReceitas = [
  {
    id: 1,
    titulo: "Cachorro quente",
    dificuldade: "simples",
    ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
    preparo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "http://youtube.com",
    vegano: false,
  },
];

// Será preciso criar uma função que permita cadastrar uma receita dentro
// da lista de receitas, seguindo os padrões do objeto estipulado na etapa
// anterior. A função deve se chamarcadastrarReceita e deverá receber
// cada informação da receita porparâmetro devolverumfeedback no
// console que o cadastro foi concluído.
const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  // console.log("Cadastro da receita " + titulo + " feito com sucesso!");
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

// Devemos criar uma função chamadaexibirReceitas queirá listar no
// console, todas as receitas cadastradas. Porém ao exibir cada receita deve
// apenas os seguintes atributos devem ser mostrados:
//  a.Titulo da Receita
//  b.Lista de Ingredientes
//  c.Se é vegana ou não
function exibirReceitas() {
  for (let i = 0; i < listaDeReceitas.length; i++) {
    const receita = listaDeReceitas[i];

    console.log("--------------------------------");
    console.log(`Título: ${receita.titulo}`);

    console.log("Ingredientes:");
    for (let j = 0; j < receita.ingredientes.length; j++) {
      console.log(`- ${receita.ingredientes[j]}`);
    }

    console.log("É vegano? ", receita.vegano ? "Sim" : "Não");
    console.log("--------------------------------");
  }
}

// Devemos criar uma função que nos permita deletar uma receita, e o nome
// serádeletarReceita ela irá receber como parâmetroo identificador da
// receita. Caso o identificador não seja encontrado deve exibir a seguinte
// mensagem:“Receita não encontrada”. Se a receita forencontrada deve
// ser deletada da lista e exibir uma mensagem de sucesso no console.
function deletarReceita(id) {
  let novaListaDeReceitas = [];

  for (let i = 0; i < listaDeReceitas.length; i++) {
    const receita = listaDeReceitas[i];

    if (receita.id !== id) {
      novaListaDeReceitas.push(receita);
    }
  }

  if (novaListaDeReceitas.length === listaDeReceitas.length) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("Receita deletada com sucesso!");
}

// Cadastra uma nova receita
cadastrarReceita(
  2,
  "Ovo frito",
  "simples",
  ["1 ovo", "1 colher de azeite", "Sal a gosto"],
  "Quebre o ovo em um copo americano, jogue sal, e leve à frigideira.",
  "https://google.com",
  false
);

// Exibe todas as receitas
exibirReceitas();

// Remove a receita de id 1
deletarReceita(1);

// Exibe a nova lista de receitas
exibirReceitas();
