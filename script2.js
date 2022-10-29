//Инкремент (префиксный)

function calculateIncrement(x) {
  y = ++x;
  return y;
}

console.log(calculateIncrement(10));

//Декремент (префиксный)

const calculateDecrement = (value1) => {
  value1 = --value1;
  return value1;
};
console.log(calculateDecrement(90));
