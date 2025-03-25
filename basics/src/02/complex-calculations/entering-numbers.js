(() => {
  const doc = document;

  // prompt() retorna un string
  const input = prompt("Number 1: ");
  // convert string input a float
  const z1 = parseFloat(input);

  const z2 = parseFloat(prompt("Number 2: "));

  const result = z1 + z2;

  doc.write(z1 + " + " + z2 + " = " + result);
})();