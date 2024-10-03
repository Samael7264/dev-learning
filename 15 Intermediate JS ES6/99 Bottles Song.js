function song(beer = 99) {
  while (beer > 0) {
    if (beer > 1) {
      console.log(
        beer +
          " bottles of beer on the wall, " +
          beer +
          " bottles of beer.\nTake one down and pass it around, " +
          (beer - 1) +
          " bottles of been on the wall."
      );
      
    } else {
      console.log(
        "No more bottles of beer on the wall, No more bottles of beer.\nGo to the store and buy some more, 99 bottles of been on the wall."
      );
    }
      beer--;
  }
}
song();
