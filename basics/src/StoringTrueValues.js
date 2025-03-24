export default function storing_true_values() {
  /**
   * Boolean values
   */
  const doc = document;

  let saved;
  saved = true;

  const done = false;

  doc.write("<p>Saved: " + saved + "</p>");
  doc.write("Done: " + done + "</p>");
 }