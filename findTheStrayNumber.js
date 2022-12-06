function stray(numbers) {
    const Arr1 = numbers.filter(x => x == numbers[0])
    if (Arr1.length > 1) {
        const Arr2 = numbers.filter(x => x !== numbers[0])
        return Arr2[0]
    } else {
        return numbers[0]
    }
}
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3