const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(mixedArr) {
    let mixedSum = 0;
    for (let i = 0; i <= mixedArr.length -1; i++){
        if (typeof mixedArr[i] === "string"){
            mixedSum += mixedArr[i].length;
        }

        else if (typeof mixedArr[i] === "number"){
            mixedSum += mixedArr[i];
        }

        else {
            mixedSum += mixedArr[i];
        }
    }
    console.log(mixedSum);
    return mixedSum;
}