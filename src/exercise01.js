/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/
window.exercise01 = function () {
  let s1 = window.prompt("Digite uma string:");
  let s2 = window.prompt("Digite outra string:");
  let resultado;
  if (s1.length != s2.length) {
    s1.length > s2.length
      ? (resultado = `A maior string é '${s1}' com ${s1.length} caracteres!`)
      : (resultado = `A maior string é '${s2}' com ${s2.length} caracteres!`);
  } else {
    resultado = `Ambas as strings possuem ${s1.length} caracteres!`;
  }
  console.log("resultado ex1: " + resultado);
};
