function bottleSong(num) {
  let bottles = num;
  while (bottles > 1) {
    console.log(`${bottles} bottles of beer on the wall, ${bottles} of beer.`)
    console.log(`Take one down and pass it around, ${bottles -1} bottles of beer on the wall.`)
    bottles--
  }
  console.log('1 bottle of beer on the wall, 1 bottle of beer.')
  console.log('Take one down and pass it around, no more bottles of beer on the wall.')
  console.log('No more bottles of beer on the wall, no more bottles of beer.')
  console.log(`Go to the store and buy some more, ${num} bottles of beer on the wall.`)
};

bottleSong(5);
