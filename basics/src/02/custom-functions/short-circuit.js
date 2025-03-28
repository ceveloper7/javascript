(() => { 
  /**
   * Si dos condiciones estan enlazadas usando el operador logico OR y la primera condicion es true, la segunda condicion no se examina porque la entera condicion ya es true.
   * Si dos condiciones estan enlazadas usando el operador logico AND y la primera condicion es false, la segunda condicion no se examina porque la condicion entera ya es false.
   */

  function leftNeighbor(p) {
    document.write("Function leftNeighbor() <br>");
    if (p > 1)
      return true;
    else
      return false;
   }

  function rightNeighbor(p) {
    document.write("Function rightNeighbor(p) <br>");
    if (p < 10)
      return true;
    else
      return false;
  }
  
  if (leftNeighbor(5) || rightNeighbor(5))
    document.write("At least one neighbor exists<br>");
  else
    document.write("No neighbor exists<br>");
  document.write("<br>");

  if (leftNeighbor(1) && rightNeighbor(1))
    document.write("Both neighbors exist<br>");
  else
    document.write("Not both neighbors exist<br>");
  document.write("<br>");

  if (leftNeighbor(5) && rightNeighbor(5))
    document.write("Both neighbors exist<br>");
  else
    document.write("Not both neighbors exist<br>");
})();