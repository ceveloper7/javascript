(() => {
  const doc = document;

  let tx;

  tx = "This";
  doc.write("<p>" + tx + "<br>");

  tx = tx + " is a";
  doc.write(tx + "<br>");

  tx += " sentences."
  doc.write(tx + "</p>");

  let z;
  z = 6;
  doc.write("<p>" + z + " ");

  z++;
  doc.write(z + " ");

  z--;
  doc.write(z + " ");

  z += 13;
  doc.write(z + " ");

  z -= 5;
  doc.write(z + " ");

  z *= 3;
  doc.write(z + " ");

  z /= 6;
  doc.write(z + " ");

  z %= 3;
  doc.write(z + "</p>");

  let a = 5, b = 5, c = 5, d;
  d = a++;
  doc.write("<p>" + d + " ");

  d = ++b;
  doc.write(d + " ");

  d = c++ + ++c + c++
  doc.write(d + " ");

 })();