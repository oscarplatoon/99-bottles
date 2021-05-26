//var prompt = require('prompt');
//prompt.start();

function bottleSong() {

  //prompt.get(['input']), function (err,result){
    //const input = result.input;
    //console.log(input);

    for (i = 99; i >= 2; i--){

      console.log(`${i} bottle${ i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${i> 1? 's' : ''} of beer.`);
      console.log(`Take one down and pass it around, ${(i-1)} bottle${(i-1) > 1 ? 's' : ''} of beer on the wall.`);
      
      if (i==2) {
    
      console.log(`${i-1} bottle${ (i-1) > 1 ? 's' : ''} of beer on the wall, ${i-1} bottle${(i-1)> 1? 's' : ''} of beer.`);
      console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
      console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
      console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
    }
  }

}
//}
;

bottleSong();