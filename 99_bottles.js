function bottleSong() {
  // create a loop
  for (var i = 99; i > 0; i--) {
  //write an if statement for bottles greater than 2
    if (i > 2) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.\n\Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
    
  //write an if else statement for 2 bottles
    } else if (i == 2) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.\n\Take one down and pass it around, ${i-1} bottle of beer on the wall.`)
    
  // else statement for 1 bottle
    } else {
      console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.\n\Take one down and pass it around, no more bottles of beer on the wall.\n\No more bottles of beer on the wall, no more bottles of beer.\n\Go to the store and buy some more, 99 bottles of beer on the wall.`)
    }
  }
};

bottleSong();
