function bottleSong(num) {
    let bottles = num;
    while(bottles >= 0){
      if( bottles > 1) {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);console.log( `Take one down and pass it around, ${bottles - 1} bottle${bottles - 1 > 1 ? 's': ''} of beer on the wall.`);
      } 
      else if(bottles === 1){
          console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`)
        }
      else {
          console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${num} bottles of beer on the wall.`)
        }
        bottles--;
    }
};

bottleSong(3);
