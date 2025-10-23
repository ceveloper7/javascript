'use strict';

export default function usingStringDataType() { 
  let message1 = 'Your name is John Doe';
  let message2 = 'Your name is \'John Doe\'';

  console.info(message1);
  console.info(message2);

  // using control character
  const message3 = 'Hello \nMr. \nDoe';
  console.info(message3)

  // Assembly string - first way
  const name = 'Jose Carlos Alvarado Fajardo';
  const age = 33;
  const fullname = 'My name is ' + name + '. I am ' + age + ' years old';
  console.info(fullname);

  // defining placeholder with string
  const firstName = 'Manuel Antonio';
  const lastName = 'Guerrero Ramos';
  const edad = 55;

  const fullname1 = `My name is ${firstName} ${lastName} and  I am ${edad} years old}`;
  console.info(fullname1);

  // evaluando expresion con Strings
  const name1 = 'Fernando ALberto';
  const age1 = 44;

  function getName() { 
    return name1;
  }
  const message4 = `My name is ${getName()}. My age is double of ${age1/2}`;
  console.info(message4);

  // definiendo multiples cadenas
  const texto = 'Dear Mr. Doe \n\nWe are happy to return ' + 
    'the requested documents to you for review. \n\n' +
    'Your sincerely, \nMrs. Smith, \nGoogle';
  console.info(texto);
  
  // using template string
  const saludo = `
  Dear Mr. Doe
  We are happy to return.
  The requested documents to you for review
  Your sincerely,
  Mrs. Smith
  Google`;
  
  console.info(saludo);
}