function bottlesOfBeer(x) {

  let n = x;
  while (n > 0) {
    if (n > 2) {
      console.log(`${n} bottles of beer on the wall, ${n} bottles of beer.
      Take one down and pass it around, 
      ${n - 1} bottles of beer on the wall.`);

  } else if (n > 1) {
      console.log(`${n} bottles of beer on the wall, ${n} bottles of beer.
      Take one down and pass it around, 
      ${n - 1} bottle of beer on the wall.`);

  } else if (n > 0) {
      console.log(`${n} bottle of beer on the wall,${n} bottle of beer.
      Take one down and pass it around, no more bottles of beer on the wall.  No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, ${x} bottles of beer on the wall.`);
    }

    n--;
  }
}

console.log(bottlesOfBeer(9))
