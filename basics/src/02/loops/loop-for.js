(() => {
  const doc = document;

  /**
   * 
   */

  // 1: Upward
  doc.write("<p>1: ");
  for (let i = 1; i <= 5; i++){
    doc.write(i + " ");
  }

  // 2: Downward
  doc.write("<br>2: ");
  for (let i = 20; i >= 10; i--) {
    doc.write(i + " ");
  }
  
  // 3: With decimal number
  doc.write("<br>3: ");
  for (let i = 3; i <= 4.1; i += 0.2) {
    doc.write(i + " ");
  }
  
  // 4: With decimal number, optimized
  doc.write("<br>4: ");
  for (let i = 3; i < 4.1; i += 0.2) {
    doc.write(i.toFixed(1) + " ");
  }
  
  // 5: With break and continue
  doc.write("<br>5: ");
  for (let i = 10; i <= 50; i++) {
    if (i >= 16 && i <= 24) {
      continue;
    }
    if (i > 30)
      break;
    doc.write(i + " ");
  }
  doc.write("</p>");

})();