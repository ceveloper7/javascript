(() => {
  /**
   * Una variable de tipo de dato simple como string, number o boolean es llamado parametro por valor. La variable en la funcion es una copia y cambiar la copia no tiene efecto
   * en el valor original.
   * 
   * Una variable de un tipo de dato no simple como un campo es llamado por referencia. En la funcion, la variable representa una copia de la referencia del campo original.
   * los elementos del campo original pueden ser cambiados, 
   */

  function output(n, t, d, p) {
    document.write(n + ", " + t + ", " + d + ", " + p + "<br>");
  }

  /**
   * 
   * @param {*} n es una copia de number, si se modifica n y el cambio no impacta number
   * @param {*} t es una copia de tx, si se modifca t y el cambio no impacta tx
   * @param {*} d es una copia de done, si se modifica d y el cambio no impacta done
   * @param {*} p es una copia de person,p hace referencia a los campos originales de person. 
   */
  function change(n, t, d, p) {
    n = 4711;
    t = "Hello";
    d = false;

    // el cambio al primero elemento es retenido
    p[0] = "Brad";
    document.write("In the function, element changed: ");
    document.write(p + "<p>");

    // si un diferente campo es asignado a p, esta accion solo afecta a p y no al campo original de person
    p = ["Sarah", "Phil", "Tim"];
    document.write("In the function, field newly created");
    document.write(p + "<p>");
  }
  
  const number = 42,
  tx = "Hello",
  done = true,
  person = ["Peter", "Monica", "John"];
  document.write("Before the call: ");
  output(number, tx, done, person);

  change(number, tx, done, person);
  document.write("After the call: ");
  output(number, tx, done, person);  
})();