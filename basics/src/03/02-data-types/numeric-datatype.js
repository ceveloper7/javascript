'use strict';

export default function usingNumericDataType() {
  // binary numbers - start with 0b
  const num1 = 0b01010101;
  console.info(num1);

  // octal numbers - start with 0o
  const num2 = 0o11147;
  console.info(num2);

  // hexadecimal numbers - starts with 0x
  const num3 = 0xF;
  console.info(num3);

  // value number range
  console.info(Number.MIN_VALUE);
  console.info(Number.MAX_VALUE);
  console.info(Number.NEGATIVE_INFINITY);
  console.info(Number.POSITIVE_INFINITY);
 }