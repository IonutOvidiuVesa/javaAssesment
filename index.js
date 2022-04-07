class JavaAssignment {
//Q1. Write a JavaScript program to compute the sum of an array of integers.
arraySum = (numbers) => {
    let totalSum = 0;
for(let i = 0; i < numbers.length; i++){
    totalSum += numbers[i];
}
console.log(totalSum);
}

//Q2. Write a JavaScript program to get the first n Fibonacci numbers
fibonacciSequence = (number) => {
    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0;
    console.log(`The fibonacci sequence of ${number} is:`)
    for(let i = 1; i <= number; i++){
        console.log(n1);
        nextTerm = n1+n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

//Q3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
checkIfLeapYear = (year) => {
    if(year % 4 === 0 && year >= 1000){
        console.log(`The year ${year} is a leap year`);
    }else if(year % 4 !== 0 && year >= 1000){
        console.log(`The year ${year} is not a leap year`);
    }else if(year % 400 === 0 && year < 1000){
        console.log(`The year ${year} a leap year`);
    }else if(year % 400 !== 0 && year < 1000){
        console.log(`The year ${year} is not a leap year`);
    }
}

//Q4. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
absoluteDifferenceBetween = (number) => {
    let value = Math.abs(number - 19);
    if(value > 19){
        console.log(value * 3);
    }else{
        console.log(value);
    }
}

//Q6. Write a JavaScript function which accepts an argument and returns the type of argument.
variableType = (n) => {
    return typeof n;
}

//Q5. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
pyGenerator = (str) => {
    if(str.includes('Py', 0)){
        return str;
    }else{
        return 'Py'+str;
    }
}

//Q7. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
longestWord = (str) => {
    let words = str.split(' ');
    let length = words[0].length;
    let maxlength = 0;
    let position = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].length > length){
        maxlength = words[i].length
        position = i;
        }

    }
    console.log(`The word with the highest number of characters is ${words[position]} with a length of ${maxlength}`);
}

//Q8. Write a JavaScript program to sort the items of an array.
sortArray = (array) =>{
    return array.sort();
}

}

// class members as exercise;
const javaExercise = new JavaAssignment;
javaExercise.arraySum([4, 5, 6]);
javaExercise.fibonacciSequence(5);
javaExercise.checkIfLeapYear(2024);
javaExercise.absoluteDifferenceBetween(15);
console.log(javaExercise.pyGenerator('other'));
console.log(javaExercise.variableType('number'));
javaExercise.longestWord('My name is Ionut');
console.log(javaExercise.sortArray([5, 1, 4, 3]));