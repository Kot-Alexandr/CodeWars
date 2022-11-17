function duplicateEncode(word) {
    let o = "";
    let v = "";
    word=word.toLowerCase();
    for (i = 0; i < word.length; i++) {
        for (j = 0; j < word.length; j++) {
            v = "";
            for (l = 0; l < word.length; l++) {
                if (j - l != 0) {
                    v = v + word[l];
                    
                }
        }
        if (v.indexOf(word[j]) === -1) {
            o = o + "(";
        } else {
            o = o + ")";
        }
    } return o;
}}
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 