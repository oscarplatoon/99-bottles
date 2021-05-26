function bottleSong(num) {
  let bottles = num;
  while(bottles >= 1){
      console.log(`${bottles} bottle${bottles > 1 ? 's' : '' } of beer on the wall, ${bottles} bottle${bottles > 1 ? 's' : '' } of beer.`)
      bottles --;
    if(bottles > 0){
      console.log(`Take one down and pass it around, ${bottles} bottle${bottles > 1 ? 's' : '' }  of beer on the wall.`);
    }
  }
  console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(`Go to the store and buy some more, ${num} bottles of beer on the wall.`);
}

bottleSong(3);
