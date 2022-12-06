function hasSurvived(attackers, defenders) {
    let A = attackers;
    let D = defenders;
    let SurviveA = 0;
    let SurviveD = 0;
    if (A.length == 0 || (A.length == 0 && D.length == 0)) {
        return true
    } else if (D.length == 0) {
        return false
    }
    if (A.length >= D.length) {
        for (i = 0; i < A.length; i++) {
            if ((A[i] > D[i]) || D[i] == undefined) {
                SurviveA++;
            } else if (D[i] > A[i]) {
                SurviveD++
            }
        }
    } else {
        for (j = 0; j < D.length; j++) {
            if ((D[j] > A[j]) || A[j]==undefined) {
                SurviveD++
            } else if (A[j]>D[j]) {
                SurviveA++
            }
        }
    }
    if (SurviveA > SurviveD) {
        return false
    } else if (SurviveD > SurviveA) {
        return true
    } else {
        let sumA = 0;
        let sumD = 0;
        A = attackers.map((x) => sumA += x);
        D = defenders.map((x) => sumD += x);
        if (sumA > sumD) {
            return false
        } else {
            return true
        }
    }
}
// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. 
// If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
