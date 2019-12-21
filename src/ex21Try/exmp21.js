// function testTry() {
//
//     // let a = 2
//
//     try {
//         console.log("Początek try");
//         console.log (a); // tutaj zostanie rzucony wyjątek
//         console.log("Dalsza część try")
//     } catch (e) { // blok kodu wykonywany w przypadku rzucenia wyjątku
//             console.log(e);
//             console.log("Koniec catch")
//     } finally { // blok wykonywany niezależnie czy pojawi się wyjatek
//         console.log("Sekcja finnally")
//     }
// }


function testTryOwnException() {

    try {
        console.log("Początek try");
        throw new Error("Wyjątek w linii 22"); // Własny wyjatek
        console.log("Dalsza część try")
    } catch (e) { // blok kodu wykonywany w przypadku rzucenia wyjątku
        console.log(e);
        console.log("Koniec catch")
    } finally { // blok wykonywany niezależnie czy pojawi się wyjatek
        console.log("Sekcja finnally")
    }
}