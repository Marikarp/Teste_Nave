/* E9
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Ordene o array de forma decrescente por idade,
em caso de empate o desempate é pelo id(em ordem crescente)

*/

window.exercise09 = function () {
  let vetor = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
  ];

  function ordena(a, b) {
    const idadea = a.age;
    const idadeb = b.age;
    const ida = a.id;
    const idb = b.id;

    let compara = 0;
    if (idadea > idadeb) {
      compara = 1;
    } else if (idadea < idadeb) {
      compara = -1;
    } else if (ida > idb) {
      compara = -1;
    } else if (ida < idb) {
      compara = 1;
    }
    return compara * -1;
  }
  let resultado = vetor.sort(ordena);
  console.log("resultado ex9: ");
  console.log(resultado);
};
