/*Power N
First solve this algorithm iteratively, then recursively.

Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}
 
Algorithm:
Step1: Create a funtion powerN with the two parameters num and exp.
Step2: Define a variable result with a value 1.
Step3: Use for loop with i initialized to 1, checks if i is less than or equal to exp and increment by every iteration.
Step4: store the multiplied value in result and return result.
Step5: console.log the function with the value.
Step6: Same call another function with two parameters.
Step7: if value is 0 return 1 else return base value multliplied with function call(num1,exp-1).
Step8: console.log the function with the value.

*/

function powerN(num,exp)
{
    let result=1;
  for(let i=1; i<=exp;i++)
    {result*=num;}
return result;    
}

console.log(powerN(5,4));
console.log(powerN(6,3));

function powerR(num1,exp1)
{
    if (exp1==0)
    {return 1;}
        return num1 * powerR(num1,exp1-1);
}

console.log(powerR(6,4));
console.log(powerR(8,3));
