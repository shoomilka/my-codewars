/*

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    var i=0;
    i += (str.match(/x/g) || []).length;
    i += (str.match(/X/g) || []).length;
    i -= (str.match(/o/g) || []).length;
    i -= (str.match(/O/g) || []).length;
    if(i == 0) return true;
    return false;
}