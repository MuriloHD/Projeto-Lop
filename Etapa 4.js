var xi=30, xd, yd, disparo = false
function setup() {
  createCanvas(400, 400);
}
 x = 300
  y = 50
function draw() {
 
  if (keyIsDown(UP_ARROW)) {
    y = y - 20;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 20;
  }
   if (keyIsDown(LEFT_ARROW)) {
    x = x - 20;
  }
   if (keyIsDown(RIGHT_ARROW)) {
    x = x + 20;
  }
  clear();
  fill(255, 0, 0)
  ellipse(x, y, 50, 55);
  fill(0, 0, 0)
  xi= xi + 2 
  rect(xi, 130, 50, 55);
  if (xi < 400){
    xi = xi +2
  }
  else{
    xi = 0
  }
  fill(0, 250, 0)
   ellipse(xd, yd, 10, 10);
  if ( keyIsDown ( CONTROL ) && ( ! disparo)) {
    disparo =  true ;
    xd = x;
    yd = y;     
  }
  if (disparo) {

    xd = xd + 5 ;
    if (xd > width) {
      disparo =  false ;
    }
  }
   if (x >width){
    x = 0
   }
  if ( x  < 0){
       x = width
      }
  if (y> height){
    y= 0
   }
  if ( y < 0){
       y= height
      }
 
}
