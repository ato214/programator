
function testTetriary() {

  var val = 29;

  var wynik = val > 20 ? "Wartość jest większa od 20":
      "Wartość jest mniejsza lub równa 20 ";

  var wynik2 = val > 20 ?
      val < 30 ? "Większe od 20 i mniejsze od 30"
      : "Równe lub Większe  od 30"
      : "Wartość mniejsza lub równa 20";

  console.log(wynik);
  console.log(wynik2);


}