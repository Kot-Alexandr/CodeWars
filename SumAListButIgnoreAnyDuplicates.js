function sumNoDuplicates(numList) {
    if (numList == []) { return 0 } else {
        let plus = 0
        let isDupl = 0
        let result = numList
        for (i = 0; i <= numList.length; i++) {
            if (result.length) {
                isDupl = result[0]
                if (result.indexOf(isDupl, 1) !== -1) { result = result.filter(el => el !== isDupl) } else {
                    plus += result[0]
                    result.shift()
                }
            }
            else { break }
        }
        return plus
    }
}

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.