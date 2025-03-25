(() => {
  const doc = document;

  /**
   * Las ramas son creadas con la sentencia if
   */
  const a = 12,
    b = 7;

  // 1. Single branch
  if (a > b) doc.write("<p>1: a is greater than b</p>");

  // 2. Single branch, with else
  if (a < b) doc.write("<p>2: a is less than b</p>");
  else doc.write("<p>2: a is not less than b</p>");

  // 3. Single branch, multiple statements in the block
  if (a > b) {
    doc.write("<p>3: a is greater than b</p>");
    doc.write("3: An additional line</p>");
  }

  /**
   * 4. Multiple branches: Todos los branches son verificados, uno despues de otro, si a no es mayor que b, el sistema verifica si a es menor que b, si no es el caso a es igual a b
   */
  if (a > b) doc.write("<p>4: a is greater than b</p>");
  else if (a < b) doc.write("<p>4: a is less than b</p>");
  else doc.write("<p>4: a is equal to b</p>");

  // 5. Character String
  const country = "Spain";
  if (country == "Spain") doc.write("<p>5: Country is Spain");

  if (country != "Spain") doc.write("<p>5: Country is not Spain");

  // 6. Ternary operator
  const greater = a > b ? a : b;
  doc.write("<p>6: The greater number is " + greater + "</p>");
})();