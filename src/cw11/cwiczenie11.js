
function testType() {
  /* let polePros = 40;
   let avAritNum = 4;
   let petrolNum = 70;


    console.log(polePros);
    console.log(avAritNum);
    console.log(petrolNum);

    let dayOfWeek = 'Monday';
    let evenNum = 4;
    let monthSix = "July";
    let monthEight = "August";


    console.log(dayOfWeek == 'Monday');
    console.log(evenNum % 2 == 0);
    console.log(monthSix.length > monthEight.length); */

 /* var age = 18;

  if (age > 18) {
   console.log('wiek ponad 18 lat');
  } else if (age === 18) {
   console.log('wiek równy 18 lat');
  } else {
   console.log('wiek poniżej 18 lat');
   } */

 /* var tempOutSide = -1;
 var tempCold = 15;
 var tempHot = 25;
 var tempVeryHot = 30;
 var tempFroz = 0;


 if (tempOutSide >= tempVeryHot) {
  console.log('Za oknem jest upalnie' + " - jest obecnie " + tempOutSide);
 } else if (tempOutSide < tempVeryHot && tempOutSide >= tempHot) {
  console.log('Za oknem jest za ciepło' + " - jest obecnie stopni " + tempOutSide);
 } else if (tempOutSide < tempHot && tempOutSide >= tempCold) {
  console.log('Na zewnątrz temperatura jest idealna'+ " - jest obecnie " + tempOutSide);
 } else if (tempOutSide < tempCold && tempOutSide >= tempFroz) {
  console.log('Na zewnątrz temperatura jest chłodno'+ " - jest obecnie " + tempOutSide);
 } else {
  console.log('Za oknem jest mroźno' + " - jest obecnie " + tempOutSide);
 }
  } */

/* var tempOutSide = 18;
var tempCold = 15;
var tempHot = 25;
var tempVeryHot = 30;
var tempFroz = 0;

switch (true) {
 case tempOutSide >= tempVeryHot:
  console.log('Za oknem jest upalnie' + " - jest obecnie " + tempOutSide);
  break;
 case tempOutSide < tempVeryHot && tempOutSide >= tempHot:
  console.log('Za oknem jest za ciepło' + " - jest obecnie stopni " + tempOutSide);
  break;
 case tempOutSide < tempHot && tempOutSide >= tempCold:
  console.log('Na zewnątrz temperatura jest idealna'+ " - jest obecnie " + tempOutSide);
  break;
 case tempOutSide < tempCold && tempOutSide >= tempFroz:
  console.log('Na zewnątrz temperatura jest chłodno'+ " - jest obecnie " + tempOutSide);
  break;
 default:
  console.log('Za oknem jest mroźno' + " - jest obecnie " + tempOutSide);
}
*/

expr = "Mangoes"

 switch (expr) {
  case "Oranges":
   console.log("Oranges were picked");
   console.log("Oranges are $0.99 a pound");
   break;
  case "Mangoes":
  case "Papayas":
   console.log("Mangoes and Papayas are $1.99 a pound");
  default:
   console.log("Sorry, we are out of " + expr + ".")



}





}