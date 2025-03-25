export default function formatting_string() {
  const doc = document;

  let helloText = "Hello world";
  doc.write("Text: " + helloText + "<br>");

  helloText = "Good morning";
  doc.write("Text: " + helloText + "<br>");

  let text2 = "Declaration and value";
  doc.write("Text: " + text2 + "<br>");

  let text3 = "With single quotation marks";
  doc.write("Text: " + text3 + "<br>");

  let text4;
  doc.write("Text: " + text4 + "<br>");

  // document.write('Text: ' + text5 + '<br>');
  // text5 = 'No declaration';
  // document.write('Text: ' + text5 + '<br>');

  const text6 = "Cannot be changed";
  doc.write("Text: " + text6 + "<br>");
  // text6 = 'Not allowed';
  doc.write("End"); 
}
