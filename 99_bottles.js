const bottleSong = (num) => {
  //Write your code here!
  let numBottles = num;
  while (numBottles >= 1) {
    console.log(`${numBottles} bottle${numBottles > 1 ? 's' : '' } of beer on the wall, ${numBottles} bottle${numBottles > 1 ? 's' : '' } of beer.`);
    numBottles--;
    if (numBottles > 0) {
      console.log(`Take one down and pass it around, ${numBottles} bottles of beer on the wall.`);
    }
  }
  console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(`Go to the store and buy some more, ${num} bottles of beer on the wall.`);
}

bottleSong(10);
