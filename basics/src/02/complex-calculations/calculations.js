(() => {
  const doc = document;

  let z;
  z = 2 + 4 - 2.5;
  doc.write("2 + 4 - 2.5 = " + z + "<br>");

  z = 2 + 4 * 3 - 6 / 2;
  doc.write("2 + 4 * 3 - 6 / 2 = " + z + "<br>");

  z = ((2 + 4) * (3 * 6)) / 2;
  doc.write("(2 + 4) * (3 * 6) / 2 = " + z + "<br>");

  z = 13.5 % 5;
  doc.write("13.5 % 5 = " + z + "<br><br>");

  z = 6;
  doc.write("z = " + z + "<br>");

  z = -z;
  doc.write("z = -z | z = " + z + "<br>");

  z = z * 5;
  doc.write("z = z * 5 | z = " + z + "<br><br>");

  // base / exponen operation
  z = 2.5 ** -3.5;
  doc.write("2.5 ** -3.5 = " + z + "<br>");

  z = (-2.5) ** -3;
  doc.write("(-2.5) ** -3 = " + z + "<br>");

  z = (-2) ** -3.5;
  doc.write("(-2) ** -3.5 = " + z + "<br>");

  z = 4 * 3 ** 2;
  doc.write("4 * 3 ** 2 = " + z);
})();