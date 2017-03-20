/*

The goal of this exercise is to convert a string to a new string
where each character in the new string is '(' if that character appears
only once in the original string, or ')' if that character appears
more than once in the original string. Ignore capitalization
when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

*/

function duplicateEncode(word){
  word = word.toLowerCase();
  var chs = [];
  var cou = [];
  var res = "";
  for(var i = 0; i < word.length; i++){
    var ch = word.charAt(i);
    var t = chs.indexOf(ch);
    if(t >= 0){
      cou[t]++;
    } else {
      chs.push(ch);
      cou.push(0);
    }
  }
  for(var i = 0; i < word.length; i++){
    var ch = word.charAt(i);
    var t = chs.indexOf(ch);
    
    if(cou[t] == 0){
      res += "(";
    } else {
      res += ")";
    }
  }
  return res;
}