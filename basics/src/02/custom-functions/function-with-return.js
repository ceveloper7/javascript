(() => {
  function sum(a, b) {
    const result = a + b;
    return result;
  }

  const x = 3;
  const y = 5;
  const z = sum(x, y);

  document.write("Sum: " + z + "<br>");
  document.write("Sum: " + sum(14, 20/4));
})();