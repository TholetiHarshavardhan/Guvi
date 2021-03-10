// Anonymous Functions:-
// Problem 1 : Print odd numbers in an array.
let arr = [5,10,11,12,14,17,19];

let odd_anonymous = function() {
    
    for(i=0;i<=arr.length-1;i++) {
        if(arr[i]%2!=0) {
            console.log(arr[i]);
        }
    }
    
}

let odd_arrow = () => {
    for(i=0;i<=arr.length-1;i++) {
        if(arr[i]%2!=0) {
            console.log(arr[i]);
        }
    }
}

odd_anonymous();
odd_arrow();

// Problem 2 : Convert all the Strings to title caps in a string array

let str = ['harsha', 'eshwar', 'satya'];

let title_caps_anonymous = function() {
    for(i=0;i<=str.length-1;i++) {
      str_title_case = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      console.log(str_title_case);
    }
}

let title_caps_arrow = () => {
    for(i=0;i<=str.length-1;i++) {
        str_title_case = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        console.log(str_title_case);
      }
}

title_caps_anonymous();
title_caps_arrow();

// Problem 3 : Sum of all numbers in an array.

let num = [1,2,3,4,5];

let sum_anonymous = function() {
    let sum = 0;
    for(i=0;i<=num.length-1;i++) {
        
        sum += num[i];
    }
    console.log(sum);
}

let sum_arrow = () => {
    let sum = 0;
    for(i=0;i<=num.length-1;i++) {
        
        sum += num[i];
    }
    console.log(sum);
}

sum_anonymous();
sum_arrow();

// Problem 4 : Return all the prime numbers in an array 
const x = [1,2,3,4,5];


const isPrime_anonymous = function(n) {
  if(n === 2) {
      return true;
  }
  else if (!Number.isInteger(n) || n < 2 || !(n%2)) {
      return false;
  }
  for(let i = 2;i<n-1;i++) {
      if(n%i===0){
          return false;
      }
  }
  return true;
}

for (let i=0;i<x.length;i++) {
    if(isPrime_anonymous(x[i])) {
        console.log(x[i]);
    }
}

const isPrime_arrow = (n) => {
    if(n === 2) {
        return true;
    }
    else if (!Number.isInteger(n) || n < 2 || !(n%2)) {
        return false;
    }
    for(let i = 2;i<n-1;i++) {
        if(n%i===0){
            return false;
        }
    }
    return true;
}

for (let i=0;i<x.length;i++) {
    if(isPrime_arrow(x[i])) {
        console.log(x[i]);
    }
}

//Problem 5 : Return all the palindromes in an array 
y = ["noon","malayalam","english"];

let palindrome_anonymous = function(str) {

    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

for (let i=0;i<y.length;i++) {
    if(palindrome_anonymous(y[i])) {
        console.log(y[i]);
    }
}

let palindrome_arrow = (str) => {
    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

for (let i=0;i<y.length;i++) {
    if(palindrome_arrow(y[i])) {
        console.log(y[i]);
    }
}


//Problem 6 : Return median of two sorted arrays of same size 

let a = [1,2,3,4,5];
let b = [6,7,8,9,10];

let medianOfArray_anonymous = function(array) {
    var mid = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return (array[mid] + array[mid - 1]) / 2;
    }
    return array[mid];
  }

merge_arr_anonymous = a.concat(b);
sort_arr_anonymous = merge_arr_anonymous.sort();
median_arr_anonymous = medianOfArray_anonymous(sort_arr_anonymous);
console.log(median_arr_anonymous);

let medianOfArray_arrow = (array) => {
    var mid = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      return (array[mid] + array[mid - 1]) / 2;
    }
    return array[mid];
}

merge_arr_arrow = a.concat(b);
sort_arr_arrow = merge_arr_arrow.sort();
median_arr_arrow = medianOfArray_arrow(sort_arr_arrow);
console.log(median_arr_arrow);

// Problem 7 : Remove duplicates from an array

var z = ["harsha","satya","eshwar","harsha","satya","eshwar"];

let removeduplicates_anonymous = function(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeduplicates_anonymous(z));

let removeduplicates_arrow = (data) => {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeduplicates_arrow(z));
