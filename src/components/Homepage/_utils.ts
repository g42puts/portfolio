function calcularIdade(dataNascimento: string) {
  // Obtém a data atual
  const dataAtual = new Date();

  // Obtém a data de nascimento
  const dataNasc = new Date(dataNascimento);

  // Calcula a diferença em milissegundos entre a data atual e a data de nascimento
  const diferenca = dataAtual.getTime() - dataNasc.getTime();

  // Converte a diferença de milissegundos para anos
  const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));

  return idade;
}

export { calcularIdade };
