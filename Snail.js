snail = function(array) {
    let s=array[0].join('');
    for (i=1;i<array.length;i++) {
s=s+s[i][array.length-1];
    }
    for (j=1;j<array.length;j++) {
s=s+s[array.length-1][(array.length-1)-j]
    }
    if (array.length>3) {
    } else {
        return s;
    }
  }
//   array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


