/* r Triangle
We have a triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on.
 Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.
 
Algorithm:
Step1: Create a funtion triangleR with a parameter n.
Step2: Use if condition to check n is 0, if true return 0.
Step3: Else return n added function call of n-1.
Step4: console.log the function with the value.
 */

 function triangleR(n)
 {
    if(n===0) 
        {return 0; }
    else{
        return n + triangleR(n-1);
    }
 }
console.log(triangleR(9));
console.log(triangleR(7));
 