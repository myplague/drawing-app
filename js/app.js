
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var mouseDown = false;


//When clicking on the color picking list items

$(".controls").on("click", "li" , function() {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");

    color = $(this).css("background-color");
console.log(color);

});




//When "new color" is pressed
$("#revealColorSelect").click(function(){
  changeColor();

$("#colorSelect").toggle();
  });

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" +r+ ", " +g+ ", " +b+ ")");
}

//When color sliders changes
$("input[type=range]").change(changeColor);

//OR when the previous event fires
  //update the new color span

//When add color is pressed
$("#addNewColor").on("click", function(){
 var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));

  $(".controls ul").append($newColor);
  $newColor.click();



});

$canvas.mousedown(function(event){
  lastEvent = event;
  mouseDown = true;
}).mousemove(function(event){
  if (mouseDown === true){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(event.offsetX,event.offsetY);
  context.strokeStyle = color
  context.stroke();
  lastEvent = event;
}
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});



  //append the new color to the controls ul
  //select the new color

//on mouse events on the canvas
  //draw lines
