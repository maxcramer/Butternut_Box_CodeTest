
var tickBackgroundOne = document.getElementById('inner__circle__tick__one');
var tickBackgroundTwo = document.getElementById('inner__circle__tick__two');


$(tickBackgroundOne).click('click', function(){
  $(tickBackgroundOne).css('background-color', '#1E5D8A');
  $(tickBackgroundTwo).css('background-color', 'white');
});


$(tickBackgroundTwo).click(function(){
  $(tickBackgroundTwo).css('background-color', '#1E5D8A');
  $(tickBackgroundOne).css('background-color', 'white');
});
