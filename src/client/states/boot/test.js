const buttons = [null, null, null, null];
for (var i = 0; i < buttons.length; i++) {
  var x;
  var y;
  if (i % 2 == 0) {
    x = 40;
  } else {
    x = 220;
  }
  if (i < 2) {
    y = 30;
  } else {
    y = 110;
  }
  console.log('>>> ', i, x, y);
}
