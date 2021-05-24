function bottleSong(num) {
  for (let i = num; i > 0; i--) {
    if (i >= 0) {
      console.log((i) + " bottles of beer on the wall, " + (i) + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
    }
  }
};

bottleSong(99);


