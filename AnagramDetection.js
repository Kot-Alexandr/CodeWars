var isAnagram = function (test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();
    test = test.split('').sort().join('');
    original = original.split('').sort().join('');
    if (test.length == original.length) {
        if (test === original) {
            return true
        } else {
return false;
        }
    } else {
        return false;
    }
};
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).