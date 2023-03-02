function disemvowel(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let bigVowels = ["A", "E", "I", "O", "U"]
    str = str.split('')
    for (i = 0; i < vowels.length; i++) {
        str = str.filter(el => el !== vowels[i])
        str = str.filter(el => el !== bigVowels[i])
    }
    return str.join('')
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.