// task 1 version 1
let flattenArr = function (array) {
    let str = array.join(", ");
    let arrResult = JSON.parse("[" + str + "]");
    return arrResult;
};

let arrOne = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(flattenArr(arrOne));

//task 1 version 2

let arrTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let flattenArray = function (array) {
    let result = array.flat();
    return result;
};

console.log(flattenArray(arrTwo));

//task 2
let userString = () => {
    let enter = String(prompt("Enter your string to check if it is a palindrome"));
    if (enter.length === 0 || enter === "null") {
        userString();
    }
    return enter;
};

let palindrome = function (str) {
    str = str.toLowerCase();
    let strReverse = str.toLowerCase().split("").reverse().join("");
    return str === strReverse;
};
console.log(palindrome(userString()));

//task 3
let enterNumbers = prompt("Enter your numbers (2,4,6):").split(",");
let userNumbers = enterNumbers.map((str) => {
    return Number(str);
});
let addNumbers = () => userNumbers.reduce((a, b) => a + b, 0);
console.log(addNumbers(userNumbers));

// task 4
let genRandom = (firstRange, secondRange) => {
    return Math.floor(Math.random() * (secondRange - firstRange + 1)) + firstRange;
};

console.log(genRandom(1, 10));

//task 5
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

let deleteElement = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

arr = deleteElement(arr, 56);
console.log(arr);

//task 6
function romanNumerals(number) {
    let numberArray = number.toString().split("").reverse();
    let result = "";
    let numerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ];

    for (let i in numberArray) {
        result = numerals[i][parseInt(numberArray[i])] + result;
    }
    return result;
}
console.log(romanNumerals(1989));
