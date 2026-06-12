const array = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0 ; i < array.length ; ++i)
{
  if(array[i] % 2 == 0)
  {
    console.log(`Number is even: ${array[i]}`);
    
  }
  else
  {
    console.log(`The number is odd: ${array[i]}`);
    
  }
}

console.log("With for-each!: ");

array.forEach(arr => {
  if (arr % 2 == 0) {
    console.log(arr);
  }
});

console.log("Test Runner");


