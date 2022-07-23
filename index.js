// Parte 1:

let num1 = 85;
let num2 = 100;

function maxOfTwoNumbers(num1, num2){
    if (num1 > num2) {
        console.log(num1);
        return num1
    }

    else {
        console.log(num2);
        return num2
    }
}

maxOfTwoNumbers(num1, num2)

// Parte 2:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];


function findLongestWord(words){
    let longestWord = " ";
    for (let i = 0; i < words.length - 1; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }
    console.log(longestWord)
    return(longestWord)
}

findLongestWord(words)

// Parte 3.1

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let sumTotal = 0;
    for (let i = 0; i < numbers.length; i++){
        sumTotal += numbers[i];
    }
    console.log(sumTotal)
    return sumTotal    
}

sumNumbers(numbers)

// Parte 3.2

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArr) {
    let mixedSum = 0;
    for (let i = 0; i < mixedArr.length; i++){
        if (typeof mixedArr[i] === "string"){
            mixedSum += mixedArr[i].length;
        }

        else if (typeof mixedArr[i] === "number"){
            mixedSum += mixedArr[i];
        }

        else if (mixedArr[i] === true ) {
            mixedSum += 1;
        }

        else if (mixedArr[i] === false) {
            mixedSum += 0;
        }
    }

    console.log(mixedSum)
    return mixedSum
}

sum(mixedArr)



// Parte 4.1

function averageNumbers(numbers){
    let average = sumNumbers(numbers)/numbers.length;
    console.log(average)
    return average
}

averageNumbers(numbers)

// Parte 4.2

function averageWordLength(words){
    let letters = 0;
    let wordsavg = 0;
    for (let i = 0; i <= words.length - 1; i++){
        letters += words[i].length; 
    }
    wordsavg = letters/words.length
    console.log(wordsavg)
    return wordsavg
}

averageWordLength(words)

// Parte 4.3

function avg(mixedArr) {
    let mixedSum = 0;
    for (let i = 0; i < mixedArr.length; i++){
        if (typeof mixedArr[i] === "string"){
            mixedSum += mixedArr[i].length;
        }

        else if (typeof mixedArr[i] === "number"){
            mixedSum += mixedArr[i];
        }

        else if (mixedArr[i] === true ) {
            mixedSum += 1;
        }

        else if (mixedArr[i] === false) {
            mixedSum += 0;
        }
    }

    let totalAvg = mixedSum / mixedArr.length
    console.log(totalAvg)
    return totalAvg
}

avg(mixedArr)
