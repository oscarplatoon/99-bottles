function bottleSong(num) {
  // Write your code here!
  let bottles = num;
  while (bottles > 1){
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
    bottles--;
    if (bottles == 1){
      console.log(`Take one down and pass it around, ${bottles} bottle of beer on the wall.`);
    } else {
      console.log(`Take one down and pass it around, ${bottles} bottles of beer on the wall.`);
    }
  }
  if (bottles == 1) {
    console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`);
}

};

bottleSong(99);
