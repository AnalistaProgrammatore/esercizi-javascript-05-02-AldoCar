/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/
let size=8;

let str="";

for (let i=0; i<size; i++) {
  for (let y=0; y<size; y++) {
    if ((i+y)%2==0) str+=" ";
    else str+="#";
  }
  str+="\n";
}

console.log(str);
