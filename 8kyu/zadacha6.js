// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// function grader(score) {
//   if(score >= 0.9 && score <= 1) return 'A';
//     else if(score >= 0.8 && score < 0.9) return 'B';
//     else if(score >= 0.7 && score < 0.8) return 'C';
//     else if(score >= 0.6 && score < 0.7) return 'D';
//     else return 'F';
//   }

function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
  }

// console.log(grader(0.96));
// console.log(grader(0.8));
// console.log(grader(0.76));
// console.log(grader(0.61));
// console.log(grader(0.5));
// console.log(grader(3));