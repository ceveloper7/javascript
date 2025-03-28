(() => {
  /**
   * Cuando definimos una funcion, podemos asignar un valor por defecto a un parametro individual al final de la lista de parametros.
   */
  function add(a, b, c = 0, d = 0) {
    const sum = a + b + c + d;
    return sum;
  }

  document.write("Two numbers: " + add(3,5) + "<br>");
  document.write("Three numbers: " + add(3, 5, 4) + "<br>");
  document.write("Four numbers: " + add(3,5,4,9) + "<br>");
})();