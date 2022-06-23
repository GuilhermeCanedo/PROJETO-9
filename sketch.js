var quadrado
function setup() {
  createCanvas(400,400);
quadrado = createSprite(200,200, 50, 50)
quadrado.shapeColor="red"
}

function draw() 
{
  background(30);
  if (keyDown("right")) {
 background("green")
  }
  if (keyDown("left")) {
    background("red")
     } 
     if (keyDown("up")) {
      background("purple") 
       }
       if (keyDown("down")) {
        background("white")
         }
drawSprites()
}




