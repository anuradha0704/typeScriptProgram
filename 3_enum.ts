enum Gender {
    Male,
    Female
}
// enum display o/p in the form of 1 or 0
console.log(Gender.Female);// prints o/p 1
console.log(Gender.Male);// o/p 0
console.log(Gender[1]);// to print male or female
console.log(Gender[0]);


enum WeekEnds {
    Saturday = 6, //here 6 is day
    Sunday = 7
}

console.log(WeekEnds[6]);
console.log(WeekEnds[7])