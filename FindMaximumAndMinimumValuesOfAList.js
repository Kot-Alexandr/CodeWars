var min = function(list){
    let minn=list[0];
    for (i=0;i<list.length;i++) {
        if (list[i]<minn) {
            minn=list[i];
        }
    }
    return minn;
} 

var max = function(list){
    let maxx=list[0];
    for (i=0;i<list.length;i++) {
        if (maxx<list[i]) {
            maxx=list[i];
        }
    }
    return maxx;
}
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.