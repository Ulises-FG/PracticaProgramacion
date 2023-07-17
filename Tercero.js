const numeroPrimo = (numeroMaximo) => {
  let xPrimos = [2];
  for (let i = 3; i < numeroMaximo; i++) {
    let numeroUso = [];
    // Genera los valores anteriores de un número
    for (let verificador = 2; verificador < i; verificador++) {
      numeroUso.push(verificador);
    }
    let evaluador = 0;
    // Hace una comparacion, la cual determina si el sobrante no es 0

    for (let primos = 0; primos < numeroUso.length; primos++) {
      let operacionLogica = i % numeroUso[primos];
      if (!(operacionLogica == 0)) {
        evaluador++;
      }
    }
    // Se evalua la cantidad de numeros que no sean 0, estos los pone en una variable y
    // se checa si es del mismo length, si es el mismo se denomina numero primo
    if (evaluador == numeroUso.length) {
      xPrimos.push(i);
    }
  }
  return xPrimos;
};
const factorPrimo = (x, y) => {
  const numerosPrimos = numeroPrimo(y);
  let seleccionado = [];

  // Recorre todos los números primos hasta que no sea posible dividir 'x'
  for (let index = 0; index < numerosPrimos.length && x > 1; index++) {
    while (x % numerosPrimos[index] === 0) {
      seleccionado.push(numerosPrimos[index]);
      x /= numerosPrimos[index];
    }
  }

  console.log('Números primos que calculan este factor primo:', seleccionado);
};

factorPrimo(600851475143, 30000);
