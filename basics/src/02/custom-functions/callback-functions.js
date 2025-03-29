(() => {
  /**
   * La referencia a una funcion puede ser transferido a otra funcion para su uso interno. La funcion transferida se denomina callback. Podemos tranferir funciones nombradas como funciones anonimas.
   * Callback functions se utiliza para manejar eventos.
   */

  function square(x) {
    return x * x;
  }

  function output(from, to, step, fct) {
    for (let p = from; p < to + step / 2.0; p += step) {
      document.write(p + " " + fct(p) + "<br>");
    }
    document.write("<br>");
  }

  // pasamos a output una referencia a una funcion llamada square, que retorna la raiz cuadrada de un numero.
  output(5.0, 15.0, 2.5, square);

  // tranferimos una funcion anonima 
  output(3.0, 7.0, 1.0, function(p){return 1/p});
})();