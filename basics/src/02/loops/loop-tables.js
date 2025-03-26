(() => {
  const doc = document;

  /**
   * Dynamic tables
   */
  doc.write("<table>");
  for (let z = 0; z < 3; z++) {
    doc.write("<tr><td>Z" + z + "</td></tr>");
  }
  doc.write("</table>");
  doc.write("<br>");

  doc.write("<table><tr>");
  for (let s = 0; s < 3; s++) {
    doc.write("<td>S" + s + "</td>");
  }
  doc.write("</tr></table>");
  doc.write("<br>");

  document.write("<table>");
  for (let z = 0; z < 3; z++) {
    document.write("<tr>");
    for (let s = 0; s < 5; s++)
      document.write("<td>Z" + z + "/S" + s + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
})();