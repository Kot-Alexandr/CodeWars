function toCamelCase(lin) {
  var end = "";
  var up = "";
  for (i = 0; i < lin.length; i++) {
    if (lin[i] != "-" && lin[i] != "_") {
      end = end + lin[i];
    } else {
      up = lin[i + 1].toUpperCase();
      end = end + up;
      i++
    }
  } return end;
}
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"