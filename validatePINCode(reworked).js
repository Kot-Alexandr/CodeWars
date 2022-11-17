function validatePIN(pin) {
    if (pin.length == 4 || pin.length == 6) { } else { return false }
    for (i = 0; i < pin.length; i++) { if (pin[i] == "." || pin[i] == "," || pin[i] == "E" || pin[i]=="+") { return false } }
    let f = pin - 1;
    pin= pin +1;
    if (f !== NaN) { if (pin >= 0) { return true } return false }
}
