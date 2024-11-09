// create a loop to generate 1 - 100
for (let i = 1; i <= 100; i++) {
    // create a variable to store each number
    let result = ""; // 

    // check for the conditions and implement the logic
    if (i % 3 == 0 && i % 5 == 0) {
        result += "FizzBuzz";
    } else if (i % 3 == 0) {
        result += "Fizz";
    } else if (i % 5 == 0) {
        result += "Buzz"
    } else {
        result += i;
    }

    // console log each result
    console.log(result);

}