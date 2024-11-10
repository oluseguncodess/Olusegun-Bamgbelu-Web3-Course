// create a function that counts the numbers of uppercase B's in a provided string argument.

// UPDATE -> Implement the countchar function in the countBs function 

function countBs(string) {
    // // create a counter for upperCaseB's starting from 0
    // let noOfUpperCaseLetters = 0;

    // // loop through the provided string to find uppercase B's
    // for (let i = 0; i < string.length; i++) {
        
    //     // if an uppercase B is found, increment the counter.
    //     if (string[i] === "B") noOfUpperCaseLetters++; 
    // }

    // // return the total upperCase B's found
    // return noOfUpperCaseLetters;
    return countChar(string, "B")
}

// create a function that counts the numbers of a specified character in a provided string argument. 
function countChar(string, char) {
    let noOfChar = 0;

    // loop through the provided string to find the specified character.
    for (let i = 0; i < string.length; i++) {
        
        // if the specified character is found, increment the counter.
        if (string[i] === char) noOfChar++; 
    }

    // return the total number of charcaters found
    return noOfChar;
}

console.log(countBs("BOBBALBBBBBBBBBB"));
console.log(countChar("kakkerlak", "k"));

