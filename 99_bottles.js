function bottleSong() {
  let beer = 99;
  do{
      console.log(`${beer} bottles of beer on the wall, ${beer} bottles of beer.`)
      beer--;
      if( beer == 1){
          console.log(`Take one down and pass it around, ${beer} bottle of beer on the wall.`)
      }
      else{
          console.log(`Take one down and pass it around, ${beer} bottles of beer on the wall.`)
      }
  }while(beer > 1);
  console.log("1 bottle of beer on the wall, 1 bottle of beer.")
  console.log("Take one down and pass it around, no more bottles of beer on the wall.")
  console.log("No more bottles of beer on the wall, no more bottles of beer.")
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
};


bottleSong();
