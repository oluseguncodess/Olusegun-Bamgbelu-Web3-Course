// this takes a value of 3, then it implement's a condition to check if 3 is greater than 0, if yes, it logs out 3 and subtract it by 1, thus forming a loop. 
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i)
    }
}

loop(3, n => n > 0, n => n - 1, console.log)