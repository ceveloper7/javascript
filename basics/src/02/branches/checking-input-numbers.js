(() => { 
  const doc = document;

  /**
   * Verificacion de un numero en multiples ramas
   */
  const number_random = Math.random();
  /**
   * Si click en Cancel, se guarda el valor null
   * Si click en Ok y no se ingresa valor, se guarda un string empty
   * 
   */
  const input = prompt("Please, enter a number from 0 to 1, without 1");
  const number_input = parseFloat(input);
  const distance = Math.abs(number_random - number_input);

  if (input == null) {
    doc.write("Cancel");
  } else if (input == "") {
    doc.write("No input");
  } else if (isNaN(input)) {
    doc.write("No valid number");
  } else if (number_input < 0 || number_input >= 1) {
    doc.write("No number in the valid range");
  } else if (distance < 0.1) {
    doc.write("You are close");
  } else { 
    doc.write("You are far off");
  }

  document.write('<br><br>Random: ' + number_random + '<br>');
  document.write('Input: ' + input + '<br>');
  document.write('isNaN(): ' + isNaN(input) + '<br>');
  document.write('Number: ' + number_input + '<br>');
  document.write('Difference: ' + (number_random - number_input) + "<br>");
  document.write('Distance: ' + distance);  
})();