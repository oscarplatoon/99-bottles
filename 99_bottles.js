// Prints the song
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// until no bottles remain on the wall.

function bottleSong(numBottles) {
  let msg1 = '';
  let msg2 = '';

  for (let i = numBottles; i > 0; i--) {
      if ( i > 2) {
        msg1 = `${i} bottles`;
        msg2 = `${i-1} bottles`;
      }
      else if ( i == 2) {
        msg1 = `${i} bottles`;
        msg2 = `${i-1} bottle`;
      }

      else if ( i == 1) {
        msg1 = `${i} bottle`;
        msg2 = `No more bottles`;
      }
      console.log(`${msg1} of beer on the wall, ${msg1} of beer.\nTake one down and pass it around, ${msg2} of beer on the wall.`);

      if (i == 1) {
        console.log(`Go to the store and buy some more, ${numBottles} bottles of beer on the wall.`);
      }
    }
  
};

bottleSong(10);
