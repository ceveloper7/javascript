(() => {
  const doc = document;

  const number = parseFloat(prompt("Please enter a number > 0"));
  try { 
    if (isNaN(number)) {
      throw "No valid number";
    }

    if (number <= 0) { 
      throw "Number too small";
    }
    doc.write("Number: " + number);
  }
  catch (errorObject) {
    alert(errorObject);
  }
})();