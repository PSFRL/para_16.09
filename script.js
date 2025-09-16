// let a = 0

// while (a<5) {
//     a++
//     console.log(a);
// }

// let b = 0

// do {
//     b++
//     console.log(b);

// }while (b<5);

// let a = 0

// while (true) {
//     a++

//     if (a % 2 == 0){
//         continue;
//     }
// console.log(a);
// break;                                   
// continue;
// }



// for (index < 5; index++) {
//     console.log(index);


// }

const numm = document.getElementById("vvod");
const btn = document.getElementById("btn");
const vyv = document.getElementById("vyvod");

function fac() {
    let nummm = Number(numm.value)
    let rez = 1
    while (nummm > 0) {
        rez *= nummm
        nummm --

    }
    vyv.textContent = rez;

}

btn.addEventListener("click", fac)


