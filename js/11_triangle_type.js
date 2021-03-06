/*

In this kata, you should calculate type of triangle with three given sides a, b and c
(given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180°
(which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle.
All input values are non-negative floating point or integer numbers (or both).

*/

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  var max = Math.max(a, b, c);
  if(2*max - a - b - c >= 0) return 0;
  var co = 2*Math.pow(max,2) - Math.pow(a,2) - Math.pow(b,2) - Math.pow(c,2);
  if(co < 0) return 1;
  if(co == 0) return 2;
  if(co > 0) return 3;
  return 0;
}