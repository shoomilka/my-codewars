function isValidCoordinates(coordinates){
  var m = coordinates.match(/^[-]?(\d+)[.]?(\d+)?[,]\s[-]?(\d+)[.]?(\d+)?$/);
  if(m < 1) return false;
  var co = coordinates.split(", ");
  if(Math.abs(parseFloat(co[0])) > 90) return false;
  if(Math.abs(parseFloat(co[1])) > 180) return false;
  return true;
}