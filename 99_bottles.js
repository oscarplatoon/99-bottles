function bottleSong(num) {
  let i = num;
  while(i >= 0){
    if( i > 1) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i} bottles of beer on the wall.`)
    } 
    else if(i === 1){
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. Take one down and pass it around, ${i} bottle of beer on the wall.`)
      }
    else {
        console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`)
      }
      i--;
  }
};

bottleSong(3);
