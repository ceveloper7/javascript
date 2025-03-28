(() => { 
  /**
   * Javascript provee el objeto arguments que retorna el numero de paramteros de la funcion.
   * podemos acceder al primero parametro del objeto arguments escriendo arguments[0] y el segundo parametro escribimos arguments[1]
   */

  // funcion que recibe cualquier numero de parametros y retorna la suma de todos los parametros
  function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result
  }

  const x = 12;
  document.write("Sum: " + sum(3 * x, 3.5) + "<br>");
  document.write("Sum: " + sum(-9, 3, x, 5.5) + "<br>");
  document.write("Sum: " + sum());
})();