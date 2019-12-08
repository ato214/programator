function volumeA(lenght, width, height) {
    if (a<=0 || b<=0 || c<=0) {
        throw "Podano nieprawidłowy parametr";
    }
    let volumeA = lenght * width * height;
    console.log(volumeA)
}


function volumeB(base, height) {
    let volumeB = base * height;
    console.log(volumeB)
}

function displayVolumeA() {
    console.log(volumeA(2,3,4))
}

function displayVolumeB() {
    console.log(volumeB(20, 4))
}

// function bbbb(base, height) {
//     let result = base * height;
//     return result
// }
//
// function volumeAWithB(lenght, width, height) {
//     try {
//         let finalResult = volumeA(1, 2, 3)
//         console.log(finalResult);
//     } catch (e) {
//         console.log(e);
//     }
//     }
//     let finalResult = aaaa(5,4);
//     console.log(finalResult)
// }




