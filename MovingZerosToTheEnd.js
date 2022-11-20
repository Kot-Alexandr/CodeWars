function moveZeros(arr) {
    let newarr = arr.filter(zero => zero !== 0);
    let newarr1 = arr.filter(zero => zero === 0);
    return newarr.concat(newarr1);
}
//   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.