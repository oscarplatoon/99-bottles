function bottleSong(number) {
  let bottleAmount = number
  let bottlePlural = 'bottles'

  for (i= bottleAmount; bottleAmount>2; bottleAmount--) {
    console.log(`${bottleAmount} ${bottlePlural} of beer on the wall, ${bottleAmount} ${bottlePlural} of beer. Take one down and pass it around, ${bottleAmount -1} ${bottlePlural} of beer on the wall.`)
  } if (bottleAmount == 2) {
    console.log(`${bottleAmount} ${bottlePlural} of beer on the wall, ${bottleAmount} ${bottlePlural} of beer. Take one down and pass it around, ${bottleAmount -1} bottle of beer on the wall. \n 1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`)
  } 
 
};

bottleSong(99);
