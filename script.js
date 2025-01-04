//your JS code here. If required.
function daysOfAYear(year) {
    // A leap year is divisible by 4 but not divisible by 100, unless also divisible by 400
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return isLeapYear ? 366 : 365;
}

// Examples
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
