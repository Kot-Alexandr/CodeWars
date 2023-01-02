function powersOfTwo(n) {
    let emptyMassive = []
    for (i = 0; i <= n; i++) {
        let TwoPower = 2;
        emptyMassive.push(Math.pow(TwoPower, i))
    }
    return emptyMassive
}

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).