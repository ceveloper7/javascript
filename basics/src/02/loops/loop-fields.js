(() => { 
  let person;
  person = ["Peter", "Monica", "John"];

  document.write("<table>");
  for (let z = 0; z < 3; z++)
    document.write("<tr><td>" + person[z] + "</td></tr>");
  document.write("</table>");
  document.write("<br>");

  const age = [
    ["Peter", 37],
    ["Monica", 35],
    ["John", 32],
  ];

  document.write("<table>");
  for (let z = 0; z < 3; z++) {
    document.write("<tr>");
    for (let s = 0; s < 2; s++)
      document.write("<td>" + age[z][s] + "</td>");
    document.write("</tr>");
  }
  document.write("</table>"); 
})();