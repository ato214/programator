// function countSquareAndCube(number1) {
//     let square = number1 ** 2;
//     let cube = number1 **3;
//     console.log(square);
//     console.log(cube)
// }
//
// function squareOnly(number1) {
//     let square = number1 ** 2;
//     return square;
// }
//
// function cubeOnly(number1) {
//         return number1 ** 3;
// }
//
// function displayResult() {
//     console.log(squareOnly(3))
//     console.log(cubeOnly(3))
// }


// druga ścieżka

function countAndReturnPower(number1, power) {
    return number1 ** power;
}

function displayResultPower() {
    console.log(countAndReturnPower(2, 2))
    console.log(countAndReturnPower(2, 3))
    console.log(countAndReturnPower(2, 10))
}