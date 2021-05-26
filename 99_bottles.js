function bottleSong(num) {
  // Write your code here!\
  let bottleNum = num;
  while (bottleNum >= 0) {
    let s = bottleNum > 1 ? 's' : '';
    let bottleMinusOneS = bottleNum - 1 > 1? 's' : '';
    let str = '';
    if (bottleNum > 0) {
    str += `${bottleNum} bottle${s} of beer on the Wall, ${bottleNum} bottle${s} of beer.\nTake one down and pass it around, ${bottleNum-1} bottle${bottleMinusOneS} of beer on the wall.`;
    } else {
    str += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ${num} bottles of beer on the wall.`;
    }
    console.log(str);
    bottleNum --;
  }
}

bottleSong(10);