function bottleSong() {
  //Insert regex to check input is number

    //Placeholder for end of cadence
    let restart = count
    //Checks for numbers less than zero
	if (count < 0) {
		return('Please input number greater than zero')
	}
    //All numbers greater than 2
	while (count > 2) {
		console.log(`${count} bottles of beer on the wall, ${count} bottles of beer. Take one down and pass it around, ${count - 1} bottles of beer on the wall.`) 
		count-- 
		}f
    //Accounts for bottles changing to bottle
	if (count == 2) {
        console.log(`${count} bottles of beer on the wall, ${count} bottles of beer. Take one down and pass it around, ${count - 1} bottle of beer on the wall.`) 
        count-- 
    }
    //When candence restarts
	if (count == 1) {
		console.log(`${count} bottles of beer on the wall, ${count} bottles of beer. Take one down and pass it around, ${count - 1} bottle of beer on the wall. No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, ${restart} bottles of beer on the wall.`)
		count--
	}
};

bottleSong();
