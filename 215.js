//Маркова Ксения 3ИСиП-621
// Задание 1

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  const arr = [1, 2, 3, 4, 5];
  alert(sumArray(arr)); 


//   Задание 2

function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  alert(getDivisors(12));


  // Задание 3

  function stringToArray(str){
    return str.split('');
  }
  var string = "Hello, World!";
  var array = stringToArray(string);
  console.log(array); 


  // Задание 4

  function reverseString(str){
    return str.split('').reverse().join('');
  }
  var string = "Hello, World!";
  var reversedString = reverseString(string);
  console.log(reversedString); 
