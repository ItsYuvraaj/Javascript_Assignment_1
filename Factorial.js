//Write a program to ﬁnd the factorial of a number.
//The Factorial of a number is the product of all the numbers from 1 to that number.
//eg: Factorial of 5 is equal to (1*2*3*4*5) i.e. 120.
//NOTE : Factorial of negative numbers doesn't exist and the factorial of 0 is 1.

//const number = 97; //9.619275968248206e+151
const number = -120;

if (number < 0) {
    console.log("The Factorial of negative numbers doesn't exist.");
} else if(number === 0){
    console.log(`The Factorial of ${number} is 1.`);
} else{
    let fact = 1;
    for (let i = 1; i <= number; i++) {
    fact *= i;
    }
    console.log(`The Factorial of ${number} is equal to ${fact}`);
}
