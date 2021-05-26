function bottleSong(num) {
  
  
  
  for (let i = num; i > 0; i--) {
    if (i >= 0) {
      console.log(`${i} bottle${i > 1 ? 's' : '' } of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottle${i - 1 > 1 ? 's' : '' } of beer.`);
    }  
  }
  console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(`Go to the store buy some more, ${num} bottles of beer on the wall.`)
};

bottleSong(99);


