
function testType() {

 var tempOutSide = 18;
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


var expr = "Oranges"

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