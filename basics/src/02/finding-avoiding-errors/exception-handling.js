(() => {
  const doc = document;

  /**
   * try - catch nos permite evitar que el programa termine anormalmente. Si sospechamos que en una parte del codigo debido a un input u otra causa se produce un error
   * podemos colocar dicha parte de codigo dentro de un bloque try catch
   */

  const y = 42;

  try {
    doc.write(x + "<br>");
  } catch (error) {
    alert(error);
  }
  finally {
    doc.write("This will definitely be done");
  }
})();