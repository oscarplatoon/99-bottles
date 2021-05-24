function bottleSong() {

  //Use a for loop to process the bottles
  for (let i = 99; i >= 0; i --) {

    //if case for plural bottles
    if (i > 2) {
      console.log(i.toString() + " bottles of beer on the wall, " + i.toString() + " bottles of beer.")
      console.log("Take one down and pass it around, " + (i-1).toString() + " bottles of beer on the wall.")

      //if case for second bottles being singular
    } if (i == 2) {
      console.log(i.toString() + " bottles of beer on the wall, " + i.toString() + " bottles of beer.") 
      console.log("Take one down and pass it around, " + (i-1).toString() + " bottle of beer on the wall.")
      //if case for second set of bottles being 0
    } if(i == 1) {
      console.log(i.toString() + " bottle of beer on the wall, " + i.toString() + " bottle of beer.") 
      console.log("Take one down and pass it around, " + "no more bottles of beer on the wall.")

      //if case for no bottles of beer.
    } else if (i == 0) {
      console.log("No more bottles of beer on the wall, no more bottles of beer.")
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
  }
}
bottleSong();