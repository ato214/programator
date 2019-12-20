function testWhileWithModulo() {

  // for (let i = 0; i < 2; i++) {
  //   console.log('Nie będę rozmawiał na lekcji Informatyki.');
  // }

  // let sum = 0;
  // for (let i = 0; i <= 100; i++) {
  //   sum += i;

  // }
  // console.log(sum);

  // let str = "";

  // for (let i = 5; i > 0; i--) {
  //   str += "Trwa odliczanie: " + i + " \n";
  // }

  // console.log(str);

  // const a = 10;
  // const b = 20;

  // for (let i = 1; i <= a && i <= b; i++) {
  //   //bo oba muszą być prawdziwe
  //   console.log("Wypiszę się tyle co ma mniejsza liczba", i);
  // }

  // for (let i = 0; i < 10; i++) {

  //   console.log('%c Główna pętla nr: ' + i, 'color:red');

  //   for (let y = 0; y < 6; y++) {
  //     console.log('%c Pętla wewnętrzna nr: ' + y, 'color:blue');
  //   }

  // }

  // for (let i = 0; i < 10; i++) {
  //   for (let i = 0; i < 6; i++) {
  //     //nie mam dostępu do zewnętrznego licznika...
  //     console.log(`Pętla zagnieżdżona: ${i}`);
  //   }
  // }

  // for (let i = 0; i < 10; i++) {
  //   for (let j = 0; j < 6; j++) {
  //     console.log(`Główna pętla: ${i}, pętla zagnieżdżona: ${j}`)
  //   }
  // }

  // let i = 0;
  // let y = 15;

  // while (i <= y) {
  //   if (i % 5 === 0) {
  //     console.log(i);
  //   }
  //   i++
  // }

  i = 0;
  j = 10;
  let sum = 0;

  while (i <= j) {
    sum += i;
    i++;
  }
  console.log(sum);


  //  let value = 0;
  //  let value2 = 15

  //   while (value < value2) {

  //     if (value % 3 === 0) {
  //       console.log(value);
  //     }

  //     value += 3;
  //   }
}