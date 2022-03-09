function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0){
    return true;
  }else if(num1 % num2 !== 0){
    return false;
  }
}

function halfSquare(num1) {
  num1 = num1 * num1 /2;
  return num1;
}

function isLong(str1) {
  if(str1.length > 15){
    return true;
  }else if (str1.length < 15){
    return false;
  }else{
    return true;
  }
  
}

function exclaim(str) {
  if(str[str.length-2] != "!" && str[str.length-1] === "!"){
    return str;
  }
  if(str[str.length-1] != "!"){
    return str + "!";

  }
  
  else{
    for(let i = str.length-1; i >= 0; i--){
          if(str[i] === "!"){
          str = str.substr(0, str.length-1);
      
          }
    
    }
  }return str + "!";
}

function countWords(str) {
  
  spaceCounter = 1;
  oneWord = 1;
    if(!str.includes(" ")){
      return oneWord;
    }
    else{

  for(let i = 0 ; i <= str.length; i++){
    if(str[i] === " "){
      spaceCounter = spaceCounter +1;
    }
  }
}return spaceCounter;
}

function containsDigit(str) {
  let numbers = '1234567890';
  for(let i =0; i < str.length; i++){

    if(numbers.includes(str[i])){
      return true
    }
  }
  return false;
}

function containsLowerCase(str) {
  let lowercaseletters = 
  "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < str.length; i++){
      
      if(lowercaseletters.includes(str[i])){
        return true
      }
     
    }
    return false;
}

function containsUpperCase(str) {
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < str.length; i++){

      if(upperCaseLetters.includes(str[i])){
        return true;
      }
    }
    return false;
}

function containsNonAlphanumeric(str) {
  let Alphanumeric = "!@#$%^&*()?'` ";
    for(let i = 0 ; i < str.length; i++)

    if(Alphanumeric.includes(str[i])){
      return true;
    }
    return false;
}

function containsSpace(str) {
  let spaces = " ";
    for(let i =0; i < str.length; i++){

      if(spaces.includes(str[i])){
        return true;
      }
    }
    return false;
}

function digits(num) {
  let numString = Math.abs(num).toString();
  let array1 = [];
      if(numString.length === 1){
          array1.push(Math.abs(num));
      }
      if(numString.length > 1){
        for(let i = 0; i < numString.length; i++){
      if(!(numString[i] === "-" || numString[i] === "."))
          array1.push(Number(numString[i]));
           
      }
}
return array1;
}
function truncate(str) {
  for(let i = 0; i < str.length; i++)
    if(str.length >= 15){
      str = str.substr(0,8);
      return str + '...';
    }
    if(str.length < 15){
      return str;
    }
}

function isValidPassword(password) {
  let output = false;
    if (containsUpperCase(password) === true && containsLowerCase(password) === true && containsDigit(password) === true && containsNonAlphanumeric(password) === true){
      output = true;
    }
  
    if(containsSpace(password) === true){
      output = false;
    }
  
    return output;
  }


function onlyPunchy(array) {

  for(let i = 0; i < array.length; i++){
    
    array[i] = exclaim(array[i]);
    if(isLong(array[i])){
      array.splice(i,1)
    }
  }
  return array;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}