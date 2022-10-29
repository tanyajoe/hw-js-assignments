function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  //добавлен параметр y
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
  console.log("x"); //возможно, лишняя строка кода, т. к. все результат выполнения всех функций выводится в консоль отдельно
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000)); //содержит один лишний параметр
console.log(getRestAfterDivision(7000, 3));
