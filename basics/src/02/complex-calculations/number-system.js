(() => { 
  const doc = document;

  /**
   * toString() nos permite mostrar numeros como string que usa lsos digitos de otro sistema de numeros
   */
  const z = 27;

  doc.write("Decimal: " + z + "<br>");

  // base hexadecimal
  doc.write("Hexadecimal: " + z.toString(16) + "<br>");

  // base 8
  doc.write("Octal: " + z.toString(8) + "<br>");

  // base 2
  doc.write("Dual: " + z.toString(2) + "<br>");
})();