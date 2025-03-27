(() => {
  const doc = document;

  let sum = 0;
  while (sum < 4) {
    sum += Math.random();
    doc.write(sum + "<br>");
   }
})();