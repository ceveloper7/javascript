import error_handling from "../../util/ErrorHandling.js";

(() => { 
  const doc = document;

  const y = 42;

  // el evento onerror sucede cuando ocurre un error
  onerror = error_handling;
  doc.write(x + "<br>");
  doc.write(y + "<br>");
})();