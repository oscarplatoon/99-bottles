function bottleSong(num) {
  // Write your code here!
  // Testing
  // cases > 1 beer
  // cases =  0 beer

  for (i = num; num > 0; num--){
    if (num == 0) {
      console.log('No more bottles of beer on the wall, no more bottles of beer.\n')
      console.log('Go to the store and buy some more, 99 bottles of beer on the wall.\n')
    }
    else {
      console.log(num,'bottles of beer on the wall,',
      num, 'bottles of beer.')
      console.log('Take one down and pass it around,', num-1,' bottles of beer \non the wall.')
      
    }

  }
  

};

bottleSong(12);
