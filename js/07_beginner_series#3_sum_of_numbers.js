/*

Given two integers, which can be positive and negative,
find the sum of all the numbers between including them too
and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

*/

function GetSum( a,b )
{
   if(a == b) return a;
   var sum = 0;
   var min;
   var max;
   
   if(a<b){
     min = a;
     max = b;
   } else {
     min = b;
     max = a;
   }
   for(var i = min; i <= max; i++) sum += i;
   return sum;
}