// console.log('hello world');
// let name='tala';
// console.log(name);
// const interestRate=0.4;
// let person={ //object
//     name:'mosh',
//     age:30
// }



console.log("Switching values between two variables")
let a='red', b='blue';
console.log('before: ' + a + ' ' + b);
let c=a;
a=b;
b=c;
console.log('after: ' + a + ' ' + b);



//Exercise 1

console.log("Exercise 1 - max of two numbers function");

function max(a , b){
    console.log(a>b ? a : b);
}

let num1 = 80, num2=70;
console.log("max of : " + num1 + " & " + num2)
max(num1, num2)



//Exercise 2

console.log("Exercise 2 - Lanscape or Portrait function ");

function isLandscape (width , height){
    return width>height ? 'Landscape' : 'Portrait' ;
}

let w=10 , h=5;
console.log("a screen with dimensions of : " + w + " for width, and " + h + " for height is a " + isLandscape(w,h));



//Exercise 3

console.log("Exercise 3 - FizzBuzz function ");

//input is divisible by 3 => Fizz
//input is divisible by 5 => Buzz
//input is divisible by 3 and 5 => FizzBuzz
//input is not divisible by 3 or 5 => input
//input is not a number => 'Not a number'

const output=fizzBuzz('g');
console.log(output);

function fizzBuzz (input) {
    if((typeof input) !== 'number') return "not a number" ;
    else if (input%3 === 0){
        if(input%5 === 0)  return 'FizzBuzz';
        return 'Fizz';
    }
    else if(input%5 === 0) return 'Buzz';
    else return input;
}



//Exercise 4

console.log("Exercise 4 - Demerit Points function ");

// speed limit = 70
// less or equal to the limit -> ok
// for each 5 over the limit -> Point : 1 (1 point)
// if more than 12 points -> License suspended

checkSpeed(130);

function checkSpeed(speed){
    let point=0;
    let speedLimit=70;
    point = speed - speedLimit;
    point=Math.floor(point/5);
    // return console.log(point);
    if (point<=0) return console.log("Ok");
    else if (point<12 && point>0) return console.log("Points : "+ point);
    else return console.log("Lisence Suspended");

}




//Exercise 5

console.log("Exercise 5 - Even and odd numbers function ");


showNumbers(11); // -> the argument is the limit show all numbers from 0 - limit and display if each of them is odd or even

function showNumbers(limit){

    console.log(0, "Even");
    for (let i=1; i<=limit ; i++){
        if(i%2 === 0) console.log(i, "Even");
        else console.log(i, "Odd");
    }

}




//Exercise 6

console.log("Exercise 6 - Count Truthy function ");

const array=[1,2,3];
console.log(countTruthy(array));

function countTruthy(array){
    let count=0;
    for(let index of array){
        if(index){ count++;}
    }
    return count;
}


//Exercise 7

console.log("Exercise 7 - String properties function ");

const movie = {
    title:'a',
    releaseYear: 2018 ,
    rating: 4.5 ,
    director: 'b'
};

//show all properties of type string

showProperties(movie);

function showProperties(obj){
    for (let index in obj){
        if(typeof obj[index] === 'string') console.log(index + ' '+ obj[index]);
    }
}



//Exercise 8

console.log("Exercise 8 - Sum of Multiples of 3 and 5 function ");

// return summation of all 3 and 5 multiples from 1 to limit

console.log(sum(10));

function sum(limit){
    let count=3+5;
    for(let i=6 ; i<=limit ; i++) if(i%3===0 || i%5===0) count+=i;
    return count;
}




//Exercise 9

console.log("Exercise 9 - Grade function ");

const marks=[80,80,50];

//find average and its corresponding grading letter
//  1- 59 F
// 60 - 69 D
// 70 - 79 C 
// 80 - 89 B 
// 90 - 100 A

console.log(calculateGrade(marks));


function calculateGrade(marks){

    let avg=0, courses=0;
    for(let mark of marks){
        avg+=mark;
        courses++;
    } 

    avg/= courses;

    if (avg<60) return 'F';
    else if (avg<70) return 'D';
    else if (avg<80) return 'C';
    else if (avg<90) return 'B';
    else return 'A';
}





//Exercise 10 

console.log("Exercise 10 && Exercise #2 from Samar - Stars function ");


showStars(5);

function showStars(rows){
    let line="";
    for(let i=0; i<=rows ; i++){
        line="";
        for(let j=0; j<i ; j++) line+="*";
        console.log(line);
    }

}



//Exercise 11

console.log("Exercise 11 - Prime Numbers function ");


showPrimes(20);
//show all prime numbers from 1 to limit

function showPrimes(limit){
    for(let i=2 ; i<=limit ; i++){
        let isPrime=true;
        for(let j=2 ; j<i ; j++){
            if(i%j===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime) console.log(i);
        else continue;
    }
}


//Exercise #1 Samar

console.log("Exercise #1 from Samar -  Number of days in month function");

let month = 2, year=2016;

console.log(daysInMonth(month,year));

function daysInMonth(month, year){

    let message="", days=0;
    switch(month){
        case 1:
            message+= "January " + year;
            days=31;
            break;
        case 2:
            message+= "February " + year;
            days=28;
            break;
        case 3:
            message+= "March " + year;
            days=31;
            break;
        case 4:
            message+= "April " + year;
            days=30;
            break;
        case 5:
            message+= "May " + year;
            days=31;
            break;
        case 6:
            message+= "June " + year;
            days=30;
            break;
        case 7:
            message+= "July " + year;
            days=31;
            break;
        case 8:
            message+= "August " + year;
            days=31;
            break;
        case 9:
            message+= "September " + year;
            days=30;
            break;
        case 10:
            message+= "October " + year;
            days=31;
            break;
        case 11:
            message+= "November " + year;
            days=30;
            break;
        default:
            message+= "December " + year;
            days=31;
    }

    if(month===2 && ((year%4===0 && year%100===0 && year%400===0) || (year%4===0 && year%100!==0) )) days++;

    console.log(message + " has " + days + " days. ");


}