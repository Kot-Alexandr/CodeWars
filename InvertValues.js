function invert(array) {
    let a = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            a.push(array[i] * (-1));
                    }
        else  {a.push(-0)};
    }
           return a;
}
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []