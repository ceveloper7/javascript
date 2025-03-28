(() => {
  /**
   * La validez de una variable declarada con let o const depende de la ubicacion de la declaracion:
   * Si es declarada fuera del bloque de llaves, es valido en el programa entero
   * Si es declarado dentro del bloque de llaves, es solo valido dentro del bloque. El bloque puede ser tambien una funcion, y podemos declarar multiples variables con el mismo nombre
   * en diferente bloques.
   */

  /**
   * la variable x es una copia del valor de la variable c. La variable x solo es valido dentro de la funcion oscar.
   * Podemos acceder a la variable original c en la funcion.
   */
  function oscar(x) {
    // otra variable con el mismo nombre a es declarado dentro de la funcion. Oculta la variable con el mismo nombre mencionado arriba y es valida en la funcion entera.
    const a = 52;
    // otra variable valida en la funcion entera.
    const d = 45;
    document.write(
      "In a function: a:" + a + ", b:" + b + ", x:" + x + ", d:" + d + "<br>"
    );

    if (true) {
      // nuevamente declaramos una variable a dentro del bloque if. esta variable oculta todas las variables del mismo nombre mencionado arriba y es valido dentro del bloque if
      const a = 62;
      document.write(
        "In a block: a:" + a + ", b:" + b + ", x:" + x + ", d:" + d + "<br>"
      );
    }
  }

  // variables a,b,c son validas para todo el programa
  const a = 42;
  const b = 43;
  const c = 44;
  document.write(
    "In the entire program: a:" + a + ", b:" + b + ", c:" + c + "<br>"
  );

  // pasamos la variable c
  oscar(c);
})();