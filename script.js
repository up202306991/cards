let minhasCartas = [];

function gerarCartas() {
  let copia = [...cartas];
  minhasCartas = [];

  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * copia.length);
    minhasCartas.push(copia[index]);
    copia.splice(index, 1);
  }

  mostrarCartas();
}

function mostrarCartas() {
  let container = document.getElementById("cartas");
  container.innerHTML = "";

  minhasCartas.forEach(carta => {
    let div = document.createElement("div");
    div.className = "carta";

    div.innerHTML = `
      <strong>${carta.id}</strong>
      <p>${carta.texto}</p>
    `;

    container.appendChild(div);
  });
}
