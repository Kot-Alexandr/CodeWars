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
