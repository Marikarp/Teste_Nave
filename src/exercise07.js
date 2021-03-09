/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */

window.exercise07 = function () {
  let controle = 0;
  let vetor = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
  ];
  console.log("resultado ex7: ");
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].age < 25) {
      console.log(
        `${vetor[i].first_name} ${vetor[i].last_name} possui menos de 25 anos`
      );
      controle = 1;
      break;
    }
  }
  if (controle == 0) {
    console.log("Nenhum resultado encontrado");
  }
};
