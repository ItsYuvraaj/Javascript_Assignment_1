//If a month of february contains 29 days, it'll be a Leap year.
//Year is a Leap Year if the it is multiple of 400.
//Year is multiple of 4 and not multiple of 100.

let year = 2022;

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " isn't a Leap Year");    
}
