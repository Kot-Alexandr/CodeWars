function nextBigger(n) {
    let help = [];
    let otvet = [];
    n = n + '';
    let newN = n + '';
    newN = newN.split('').reverse();
    if (newN[0] > newN[1]) {
        let a = newN[0];
        let b = newN[1];
        newN[0] = b;
        newN[1] = a;
        newN = newN.reverse().join('');
        return parseInt(newN);
    } else {
        for (j = 1; j < newN.length - 1; j++) {
            let aa = newN[j];
            let bb = newN[j + 1];
            aa = parseInt(aa);
            bb = parseInt(bb);
            if (aa > bb) {
                let newNN = [...newN];
                let x = newNN.splice(0, j + 2); // остаток и есть newNN
                for (q = 1; q < x.lenght + 1; q++) { // цикл для поиска числа на что поменять крайнее числож q чему равно д.б.
                    let poisk = bb + q;
                    let result = x.indexOf(poisk);
                    if (result !== -1) {
                        otvet = otvet.push(x[x.indexOf(poisk)])
                        x = x.splice(x.indexOf(poisk), 1);
                        x.sort();
                        help = otvet.concat(x);
                        otvet = x.concat(help);
                        otvet = otvet.reverse().join('');
                        return parseInt(otvet);

                    }

                }
            }
        }
    } return -1;
}

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071

