function bottleSong() {
  let bottles = 99

  for (let i = bottles; i > 0; i--){

    if (i === 2){
      console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. ")
    }  
    else if (i === 1){
      console.log(`1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.\n No more bottles of beer on the wall,no more bottles of beer. Go to the store and buy some more, ${bottles} bottles of beer on the wall.`)
    }  
    else {

     console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall.`)
   }
}

};

bottleSong();
