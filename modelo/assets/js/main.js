// Capturando evento de submite do usuario
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) { //função para utilizar um evento // (qual evento desejo escutar, criação de uma função anonima capturando o (event))
  e.preventDefault(); //previnindo o evento
  const inputPeso = e.target.querySelector('#peso') //  quem que recebe o evento (e.target) mostra qual elemento foi clicado na pagina
  const inputAltura = e.target.querySelector('#altura') 
  
  const peso = Number(inputPeso.value) // atenção com os objetos com a letra Maiscula na frente Number // erro cometido: number
  const altura = Number(inputAltura.value)

  if (!peso) {// se o peso não for falso
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {// se a altura não for falso
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)
  console.log(imc)
  console.log(nivelImc)
  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  setResultado(msg, true)
})

function getNivelImc(imc) {
  const nivel =['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  // if (imc >= 39.9) {
  //   return nivel[5];
  // } else if (imc >= 34.9) {
  //   return nivel[4];
  // } else if (imc >= 29.9) {
  //   return nivel[3];
  // } else if (imc >= 24.9) {
  //   return nivel[2];
  // } else if (imc >= 18.5) {
  //   return nivel[1];
  // } else if (imc < 18.5) {
  //   return nivel[0];
  // }
  // compactando o if e else acima
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2)

}

function criaP () {
  const p = document.createElement('p'); // criando paragrafo
  return p;
}

function setResultado (msg,isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  
  const p = criaP();
  
  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg;
  resultado.appendChild(p) //adicionando o paragrafo dentro do resultado
}