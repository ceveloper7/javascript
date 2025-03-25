export default function storing_numbers() { 
  const doc = document;

  let number;
  number = 42;

  const anotherNumber = number + 30.8;
  const smallNumber = -3.7e-3;
  const bigNumber = 5.2e6;
  const manyDigits = 3_530_755.383_725;

  doc.write("<p>First number: " + number + "<br>");
  doc.write("Another number: " + anotherNumber + "<br>");
  doc.write("Addition incorrect: " + anotherNumber + 25 + "<br>");
  doc.write("Addition correct: " + (anotherNumber + 25) + "<br>");
  doc.write("Small number: " + smallNumber + "<br>");
  doc.write("Big number: " + bigNumber + "<br>");
  doc.write("Many digits: " + manyDigits);
}