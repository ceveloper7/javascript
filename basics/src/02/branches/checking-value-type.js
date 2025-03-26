(() => {
  const doc = document;

  /**
   * === este operador valida la coincidencia del valor de la variable y el tipo de este valor. el sistema valida si el valor es number, string o boolean
   * !==
   * typeof provee el tipo de una variable o de un valor.
   */

  const a = 4711;
  const b = "4711";
  const c = 4711;
  const d = true;

  doc.write("<p>a: " + a + ", " + typeof a + "<br>");
  doc.write("b: " + b + ", " + typeof b + "<br>");
  doc.write("c: " + c + ", " + typeof c + "<br>");
  doc.write("d: " + d + ", " + typeof d + "<br><br>");

  if (a == b) {
    doc.write("a == b<br>");
  }
  
  if (a === c) {
    doc.write("a === c<br>");
  }

  if (a === b) {
    doc.write("a === b");
  } else {
    doc.write("Not a === b");
  }
})();