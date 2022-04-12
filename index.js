class JavaAssignment {
//Q1. Write a JavaScript program to compute the sum of an array of integers.
arraySum = (numbers) => {
    let totalSum = 0;
for(let i = 0; i < numbers.length; i++){
    totalSum += numbers[i];
}
return totalSum;
}

//Q2. Write a JavaScript program to get the first n Fibonacci numbers
fibonacciSequence = (number) => {
    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0;
    let fibonacciSequence = [n1, n2];
    console.log(`The fibonacci sequence of ${number} is:`)
    for(let i = 1; i < number; i++){
        nextTerm = n1+n2;
        n1 = n2;
        n2 = nextTerm;
        fibonacciSequence.push(n2);
    }
    return fibonacciSequence;
}

//Q3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
checkIfLeapYear = (year) => {
    if(year % 4 === 0 && year >= 1000){
        return `The year ${year} is a leap year`;
    }else if(year % 4 !== 0 && year >= 1000){
       return `The year ${year} is not a leap year`;
    }else if(year % 400 === 0 && year < 1000){
        return `The year ${year} a leap year`;
    }else if(year % 400 !== 0 && year < 1000){
        return `The year ${year} is not a leap year`;
    }
}

//Q4. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
absoluteDifferenceBetween = (number) => {
    let value = Math.abs(number - 19);
    if(value > 19){
        return value * 3;
    }else{
        return value;
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
    return `The word with the highest number of characters is ${words[position]} with a length of ${maxlength}`;
}

//Q8. Write a JavaScript program to sort the items of an array.
sortArray = (array) =>{
    return array.sort();
}

}

// class members as exercise;
const javaExercise = new JavaAssignment;
document.getElementById("q1").innerHTML = javaExercise.arraySum([4, 5, 6]);
document.getElementById("q2").innerHTML = javaExercise.fibonacciSequence(20);
document.getElementById("q3").innerHTML = javaExercise.checkIfLeapYear(2024);
document.getElementById("q4").innerHTML = javaExercise.absoluteDifferenceBetween(15);
document.getElementById("q5").innerHTML = javaExercise.pyGenerator('other');
document.getElementById("q6").innerHTML = javaExercise.variableType('number');
document.getElementById("q7").innerHTML = javaExercise.longestWord('My name is Ionut');
document.getElementById("q8").innerHTML = javaExercise.sortArray([5, 1, 4, 3]);
