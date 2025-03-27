(() => {
  const doc = document;

  /**
   * do while depende de una condicion que verifica el final del loop
   */
  const number_random = Math.random() * 20 + 1;
  const a = Math.floor(number_random);
  const b = Math.floor(Math.random() * 20 + 1);
  const sum = a + b;
  let number_input;

  do {
    const input = prompt(a + " + " + b + " =  ");
    number_input = parseInt(input);
    if (sum != number_input)
      alert("Pleasy try again");
  }
  while (number_input != sum);

  document.write(a + " + " + b + " = " + sum);
})();