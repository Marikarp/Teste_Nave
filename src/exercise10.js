/* E10
Para o seguinte exercício, considere os array de objetos.

const movies = [
	{ id: 1, name: 'Joker' },
	{ id: 2, name: 'Parasite' },
	{ id: 3, name: 'Avengers' },
	{ id: 4, name: 'Her' }
]
const actors = [
	{ id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
	{ id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
	{ id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
	{ id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
]

Faça uma função que receba 2 parâmetros: um array de movies e um array de actors.
 A função deve retornar um array de movies, onde cada movie possui a propriedade actors, que sera um array com os nomes dos atores. Por ex:

[
	{
		id: 99,
		name: 'Lorem Ipsum',
		actors: ['John Doe', 'Jane Doe']
	}
]

 */

window.exercise10 = function () {
  const movies = [
    { id: 1, name: "Joker" },
    { id: 2, name: "Parasite" },
    { id: 3, name: "Avengers" },
    { id: 4, name: "Her" }
  ];
  const actors = [
    { id: 1, name: "Cho Yeo-jeong", movie_ids: [2] },
    { id: 2, name: "Robert Downey Jr.", movie_ids: [3] },
    { id: 3, name: "Joaquin Phoenix", movie_ids: [1, 4] },
    { id: 4, name: "Scarlett Johansson", movie_ids: [3] }
  ];
  console.log("resultado ex10: ");
  console.log(inclui(movies, actors));

  function inclui(filme, ator) {
    for (let i = 0; i < ator.lenght; i++) {
      for (let j = 0; j < ator[i].movie_ids.lenght; j++) {
        let cod = ator[i].movie_ids[j].value;
        for (let k = 0; k < filme.lenght; k++) {
          if (filme[k].id == cod) {
            filme[k].name[j] = ator[i].name.value;
          }
        }
      }
    }
    console.log(filme);
  }
};
