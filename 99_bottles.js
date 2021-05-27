const bottleSong = (num) =>{
    let numbottles = num;
    while (numbottles >=1){
        console.log(`${numbottles} bottle${numbottles > 1 ? 's':''} of beer on the wall, ${numbottles} bottle${numbottles > 1 ? 's':''} of beer.`);
        numbottles --;
        
        if (numbottles > 0){
        console.log(`Take one down and pass it around, ${numbottles} bottles of beer on the wall.`);
        
        }
    }
    console.log('Take one down and pass it around, no more bottles of beer on the wall.');
    console.log('No more bottles of beer on the wall, no more bottles of beer.');
    console.log(`Go to the store and buy some more, ${num} bottles of beer on the wall...`);
}

bottleSong(9);
