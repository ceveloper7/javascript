(() => {
  /**
   * Las funcion proveen un valor de retorno. Si queremos usar una funcion para retornar multiples valores o cambiar multiples valores transferidos, tenemos dos opciones:
   * Podemos guardar los valores en un campo y transferirlo o retornar el campo
   * Podemos emplear destructuring asignment 
   */
  function swap(x, y) {
    document.write("After the transfer: " + x + " " + y + "<br> ");
    const temp = x;
    x = y;
    y = temp;
    document.write("Before the return: " + x + " " + y + "<br>");
    // el resultado se pasa a un campo
    return [x, y];
  }
  
  let a = 7;
  let b = 12;

  document.write("Before the swap: " + a + " " + b + "<br>"); 
  [p, q] = swap(a, b);
  document.write("After the swap: " + p + " " + q);
})();