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
      <button onclick="substituirCarta('${carta.id}')">
        Substituir
      </button>
    `;

    container.appendChild(div);
  });
}
function substituirCarta(idCarta) {
  // remover a carta atual
  minhasCartas = minhasCartas.filter(c => c.id !== idCarta);

  // criar lista de cartas ainda disponíveis
  let usadas = minhasCartas.map(c => c.id);
  let disponiveis = cartas.filter(c => !usadas.includes(c.id));

  if (disponiveis.length === 0) {
    alert("Não há mais cartas disponíveis.");
    return;
  }

  // escolher nova carta aleatória
  let index = Math.floor(Math.random() * disponiveis.length);
  minhasCartas.push(disponiveis[index]);

  mostrarCartas();
}
