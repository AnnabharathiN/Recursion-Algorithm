/* The Fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 1 and 1 
(essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is 1, 1, 2, 3, 5, 8, 13, 21 and so on. 
Define a recursive fibonacci(n) method that returns the nth Fibonacci number, with n=1 representing the start of the sequence.

Algorithm:
Step1: Create a funtion fibonacciI with a parameter n.
Step2: Define three variable a, b, and sum.
Step3: Use for loop with i initialized to 0, checks if i is less than n and increment by every iteration.
Step4: store the a+b value in sum and assign a=b, b=sum, return b.
Step5: console.log the function with the value.
Step6: Same way call another function with a parameter n.
Step7: if n value is 0 return 0, if 1 return 1 else return function call n-1 added with function call(num1-2).
Step8: console.log the function with the value.
*/



function fibonacciI(n)
{
    let a = 0 , b=1;
    let sum=0;
    for( let i=0 ;i<n-1;i++)
    {
        sum = a + b;
        a=b;
        b=sum;
       
    }
    return b;
}
console.log(fibonacciI(6));
console.log(fibonacciI(10));

function fibonacciR(num)
{
    if(num===0) return 0;
    if(num===1) return 1;
        return fibonacciR(num-1) + fibonacciR(num-2)
    
}

console.log(fibonacciR(6));
console.log(fibonacciR(10));