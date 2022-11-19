function isLeapYear(year) {
    let v = year % 4;
    let nv = year % 100;
    let v1 = year % 400;
    if (v==0 && nv==0 && v1==0) {return true} else if (v==0 && nv==0) {return false} else if (v==0) {return true} else {return false};
  }
//   Check leap year.