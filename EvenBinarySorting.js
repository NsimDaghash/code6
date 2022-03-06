/*
Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.

Example:

evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"
Note: make sure all the binary numbers have a length of 3
*/
function evenBinary(n) {
    //Goodluck, Have Fun!
    const even = n.split(' ').filter((element) => element%2 ===0 ).sort();
    const result = n.split(' ');
    return result.map((odd)=> odd%2!==0?odd:even.shift()).join(' ');
  }