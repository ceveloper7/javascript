(() => {
  const doc = document;

  /**
   * Los operador logicos && (and) y ||(or)
   * Con el and logico, todas las condiciones individuales deben ser true para que la conficion entera sea true.
   * Con el or logico, una condicion que sea true es suficiente para que la condicion entera sea true
   * el operador logico !, permite hacer un negacion, este operador cambia el valor true a false, el valor true cambia a false
   */

  const a = 21; // 25

  if (a >= 10 && a <= 20) {
    doc.write("1: between 10 and 20 </br>");
  } else {
    doc.write("1: not between 10 and 20 </br>");
  }

  if (a < 10 || a > 20 ) {
    doc.write("2: not between  10 and 20 </br>");
  } else {
    doc.write("2: between 10 and 20 </br>");
  }

  if (!(a >= 10 && a <= 20)) {
    doc.write("3: not between 10 and 20");
  } else { 
    doc.write("3: between 10 and 20");
  }
})();
 