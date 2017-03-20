/*

Given: an array containing hashes of names

Return: a string formatted as a list of names
separated by commas except for the last two names,
which should be separated by an ampersand.

*/

function list(names){
  if(names.length == 0) return '';
  if(names.length == 1) return names[0].name;
  var res = '';
  for(var i = 0; i < names.length-2; i++) res += names[i].name+', ';
  res += names[names.length-2].name + ' & '+names[names.length-1].name;
  return res;
}