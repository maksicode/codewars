// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take 
// this garbled text and remove all of the numbers. Your program will take 
// in a string and clean out all numeric characters, and return a string 
// with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
    return s.replace(/\d+/g, '');
  }

//   console.log(stringClean('Hel8345lo78, Wo47r45ld4567: .766'));

