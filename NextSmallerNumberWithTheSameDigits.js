function nextSmaller(n) {
    let help = [];
    let otvet = [];
    let p;
    let m;
    let gg;
    n = n + '';
    let newN = n + '';
    newN = newN.split('').reverse();
    if (newN[1] > newN[0]) {
        let a = newN[0];
        let b = newN[1];
        newN[0] = b;
        newN[1] = a;
        newN = newN.reverse().join('');
        if (newN[0]==0) {return -1}
        return parseInt(newN);
    } else {
        for (j = 1; j < newN.length - 1; j++) {
            let aa = newN[j];
            let bb = newN[j + 1];
            aa = parseInt(aa);
            bb = parseInt(bb);
            if (bb > aa) {
                let newNN = [...newN];
                let x = newNN.splice(0, j + 2);
                for (q = 1; q < 10; q++) {
                    let poisk = bb - q + "";
                    let result = x.indexOf(poisk);
                    if (result !== -1) {
                        p = otvet.push(poisk);
                        m = x.splice(result, 1);
                        x.sort().reverse();
                        help = otvet.concat(x);
                        newNN = newNN.reverse();
                        gg = newNN.concat(help);
                        gg = gg.join('');
                        if (gg[0] == 0) {
                            return -1;
                        }
                        return parseInt(gg);
                    }
                }
            }
        }
    } return -1;
}

// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. 
// Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.