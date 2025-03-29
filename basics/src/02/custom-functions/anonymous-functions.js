(() => {
  /**
   * Anonymous funcion: Funciones sin nombre
   * 
   */
  const greeting = function () {
    document.write("Hello world <br>");
  }

  const sum = function (a, b) {
    const s = a + b;
    return s;
  }

  // welcome recibe una copia de greeting
  function oscar(welcome) {
    welcome();
  }

  greeting();
  oscar(greeting);

  const result = sum(35, 7);
  document.write(result + "<br>");

  const add = sum;
  document.write(add(45, 17) + "<br>");

  document.write((function () {
    return "Good morning <br>";
  })());

  document.write((function (a, b) {
    return a * b;
  })(12,6));
})();