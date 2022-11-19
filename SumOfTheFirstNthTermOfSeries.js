function SeriesSum(n) {
    let x;
    let y = 0;
    if (n !== 0) {
        for (i = 0; i < n; i++) {
            x = 1 / (1 + i*3);
            y += x
        } return y.toFixed(2);
    } else {
        return n.toFixed(2);
    }
}
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"