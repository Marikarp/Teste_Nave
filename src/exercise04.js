/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

window.exercise04 = function () {
  fetch(`https://viacep.com.br/ws/96020480/json/`).then((response) => {
    response.json().then((data) => {
      console.log(`${data.logradouro}, 337, ${data.localidade}/${data.uf}`);
    });
  });

  console.log(`resultado ex4:`);
};
