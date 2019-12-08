
function testWhileWithModulo() {

 let value = 0;
 let value2 = 15

  while (value < value2) {

    if (value % 3 === 0) {
      console.log(value);
    }

    value += 3;
  }
}
