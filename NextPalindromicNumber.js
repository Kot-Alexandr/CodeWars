function nextPal(val) {
    let nextPalindrome = val + 1;
    for (nextPalindrome; nextPalindrome > 0; nextPalindrome++) {
        let x = nextPalindrome+'';
        x=x.split('').reverse().join('');
        x=parseInt(x);
        if (x==nextPalindrome) {
            return nextPalindrome;
        }
    }
}
// There were and still are many problem in CW about palindrome numbers and palindrome strings. 
// We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) 
// that will output the smallest palindrome number higher than val.