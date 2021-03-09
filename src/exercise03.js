/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

window.exercise03 = function () {
  let objeto = { 4: "a", 3: "e", 1: "i", 5: "s" };
  let str = "T35t3 d3 35t4g1o";

  let resultado = str.replace(/[0-9]/g, function teste(letra) {
    let res = objeto[letra];
    return res;
  });

  console.log("resultado ex3: " + resultado);
};
