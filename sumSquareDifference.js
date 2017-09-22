// BEGIN (write your solution here) (write your solution here)
const sumOfSquare = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += (i * i);
    }
    return sum;
  };
  
  const squareOfSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum * sum;
  };
  
  const sumSquareDifference = (n) => {
    const num1 = squareOfSum(n);
    const num2 = sumOfSquare(n);
    const res = num1 - num2;
    return res;
  };
  // END
  
  export default sumSquareDifference;