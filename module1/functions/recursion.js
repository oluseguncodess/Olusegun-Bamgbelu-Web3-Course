// for odd numbers, subtracting -2 will always end in 1 and for even numbers, it will always end in 0. 

// create a function that checks if the number provided is even or odd

function isEven(number) {
    // condition for the number being even
    if (number == 0) return true; 

    // condition for the number being odd
    else if (number == 1) return false; 

    // changing a negative number to positive and returning it as recursive so it reduces till the number is 0 or 1
    else if (number < 0) return isEven(-number);
    
    // returning a recursive function so it reduces the provided number to either 0 or 1
    else return isEven(number - 2);
}

// display the result
console.log(isEven(-24));