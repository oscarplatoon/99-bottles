const bottleSong = (num) => {
  // Write your code here!
  for(i = num; i >= 0; i--){
    if(i==0){
    console.log('No more bottles of beer on the wall, no more bottles of beer.')
    console.log(`Go to the store and buy some more, ${num} bottles of beer on the wall.`)
    }
    else if(i==1){
    console.log('1 more bottle of beer on the wall, 1 more bottle of beer.')
    console.log('Take one down, pass it around, no more bottles of beer on the wall.')
    }
    else if(i==2){
      console.log('2 more bottles of beer on the wall, 2 more bottles of beer.')
      console.log('Take one down, pass it around, 1 more bottle of beer on the wall.')
      }
    else{
      console.log(`${i} more bottles of beer on the wall, ${i} more bottles of beer`)
      console.log(`Take one down, pass it around, ${i} more bottle of beer on the wall.`)
      
    }
  }
  
};

bottleSong(5);
