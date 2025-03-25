(() => {
  const doc = document;

  /**
   * confirm()  provee una mayor interaccion con un branch
   */
  const response = confirm("Do you want to carry out this action?");
  if (response) {
    doc.write("This action will be carried out");
  } else { 
    doc.write("this action will not be carried out");
  }
})();