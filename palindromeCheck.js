function isPalindrome(x) {
    x = x.toLowerCase();
    let r = "";
    r = x.split('').reverse().join('');
    if (x == r) { return true } else { return false }
}
// Write a function that checks if a given string (case insensitive) is a palindrome.