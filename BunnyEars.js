/*Bunny Ears
We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
Algorithm:
Step1: Create a funtion bunnyEars with the parameter n.
Step2: Use if to check n is 0 if true return 0, else return 2 + function n-1
Step3: console.log the function with the value.*/

function bunnyEars(n)
{
    if (n===0)
    {
        return 0;
    }
    return 2 + (bunnyEars(n-1));

}
console.log(bunnyEars(5));
console.log(bunnyEars(10));
console.log(bunnyEars(43));

