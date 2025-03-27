(() => {
  function sum_and_mean(x, y, z) {
    const sum = x + y + z;
    const avg = sum / 3;

    return [sum, avg];
  }
  
  let x = 2.4, y = -3.6, z = 7.5;
  [sum, avg] = sum_and_mean(x, y, z);

  document.write("La suma de " + x + " + " + y + " + " + z + " = " + sum + "<br>");
  document.write("El promedio de " + x + ", " + y + ", " + z + " = " + avg + "<br>");
})();