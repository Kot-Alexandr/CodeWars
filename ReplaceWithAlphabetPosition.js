function alphabetPosition(text) {
    let numbers = [];
    text = text.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (i = 0; i < text.length; i++) {
        if (alphabet.indexOf(text[i]) !==-1) {
            numbers.push(alphabet.indexOf(text[i])+1);
        }
    } numbers=numbers.join(' ');
    return numbers;
}
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.