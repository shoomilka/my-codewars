/*

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus
of cells and carries the "instructions" for the development
and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other,
as "C" and "G". You have function with one side of the DNA;
you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all.

DNA_strand ("ATTGC") # return "TAACG"

DNA_strand ("GTAT") # return "CATA"

*/

function DNAStrand(dna){
  var res = "";
  for(var i = 0; i < dna.length; i++){
    if(dna.charAt(i) == 'A') { res += 'T';
    } else if(dna.charAt(i) == 'T') { res += 'A';
    } else if(dna.charAt(i) == 'C') { res += 'G';
    } else if(dna.charAt(i) == 'G') { res += 'C';
    }
  }
  return res;
}