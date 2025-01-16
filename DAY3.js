
// spred operator example
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); 


// question 1
function calculateDiscount(price, discount = 10) {
    if (price < 0 || discount < 0) {
      return "Invalid input. Price and discount should be non-negative.";
    }
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
  }
  
  console.log(calculateDiscount(100)); 
  console.log(calculateDiscount(200, 20)); 
  console.log(calculateDiscount(150, 0)); 



  // question 2
  function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 


  // question 3
  function logArguments(...args) {
    console.log(args);
  }
  
  logArguments(1, 'hello', true, { key: 'value' }); 



  // question 4

  function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
  }
  
  console.log(createMessage("Welcome", "Alice", "Bob", "Charlie")); 
  

  // question 5

  function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); 


  // question 6


  function createUserProfile(username, age = 25, country = "Unknown") {
    return { username, age, country };
  }
  
  console.log(createUserProfile("JohnDoe", 30, "USA")); 
  console.log(createUserProfile("JaneDoe")); 
  
  



