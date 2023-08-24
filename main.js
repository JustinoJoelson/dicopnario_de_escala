// Criar um objeto vazio para armazenar as escalas
let escalas = {};

// Define a escala cromatica. 
let notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// Define a regra para achar a escala maior e menor 
let intervalos_maior = [2, 2, 1, 2, 2, 2, 1]; // T T ST T T T ST
let intervalos_menor = [2, 1, 2, 2, 1, 2, 2]; // T ST T T ST T T

//gera a escala com a primeira nota aplicando a regra de T T ST T T T ST 
function gerar_escala(nota, intervalos) {
    let inicial = notas.indexOf(nota);
    let escala = [nota];
    
    for (let i of intervalos) {
        inicial = (inicial + i) % notas.length;
        escala.push(notas[inicial]);
    }
    return escala.join(" ");
}

// Percorrer as notas e gerar as escalas maiores e menores naturais
for (let nota of notas) {
    // Gerar a escala maior natural e adicionar ao objeto com a chave "nota maior"
    let escala_maior = gerar_escala(nota, intervalos_maior);
    escalas[nota + " MAIOR"] = escala_maior;
    // Gerar a escala menor natural e adicionar ao objeto com a chave "nota menor"
    let escala_menor = gerar_escala(nota, intervalos_menor);
    escalas[nota + " MENOR"] = escala_menor;
}

function mostrarEscala() {
  // Obter o valor do campo de entrada "escala"
  let escala_escolhida = document.getElementById("escala").value.toUpperCase();
  // Verificar se a escala é válida e extrair a escala correspondente do objeto de escalas
  if (escalas.hasOwnProperty(escala_escolhida)) {
      let escala = escalas[escala_escolhida];
      // Atualizar o campo de entrada "resultado" com a escala selecionada
      document.getElementById("resultado").value = escala;
  } else {
      alert("Escala inválida!");
  }
}