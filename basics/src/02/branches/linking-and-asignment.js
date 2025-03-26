(() => { 
  const doc = document;

  /**
   * Dos nuevo operadores
   * &&=
   * ||=
   * combinan un logical link con asignacion
   */
  let a = true, b = true, c = false;
  doc.write("a: " + a + ", b: " + b + ", c: " + c + "<br>");

  // se lee: true and true print true
  a &&= b;
  doc.write("a after a &&= b : " + a + "<br>");

  // se lee: true and false print false
  a &&= c;
  document.write("a after a &&= c : " + a + "<br>");

  // se lee: true or false print false
  a ||= c;
  document.write("a after a || =c : " + a + "<br>");

  // se lee: true o true print true
  a ||= b;
  document.write("a after a ||= b : " + a);
})();