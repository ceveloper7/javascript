(() => { 
  /**
   * Parametro es una informacion que se transfiere a una funcion cuando es llamada. La function procesa esta informacion y genera resultado.
   */
  function output(country, city) {
    document.write("The capital of " + country + " is " + city + "<br>");
  }
  
  const a = "Spain";
  const b = "Madrid";

  output(a, b);
  output("France", "Paris");
})();