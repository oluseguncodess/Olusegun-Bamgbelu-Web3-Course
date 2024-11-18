function every(array, predicate){
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}


function every2(array, predicate) {
   return !array.some((element) => !predicate(element))
}

console.log(every([2, 4, 16], n => n < 10));