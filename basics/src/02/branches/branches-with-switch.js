(() => {
  const doc = document;

  /**
   * Switch provee una forma de crear ramas en nuestro programa
   */

  const country = prompt("Please entry a country");
  let city;

  switch (country) {
    case "Italy":
      city = "Rome";
      break;
    case "England":
    case "Wales":
    case "Scotland":
      city = "London";
      break;
    default:
      city = "Not known";
  }
  
  doc.write("Capital of the coutry " + country + " is " + city);
})();