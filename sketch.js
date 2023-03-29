


function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre
  var m1, m2, m3, m4, m5;
  var a1, a2, a3, a4;
  var r1, r2, r3, r4, r5, r6;
  var c1, c2, c3;
  var e1, e2, e3, e4;

}


function draw() {
  background("black");

  m1 = createSprite(50,200,20,300);
  m1.shapeColor="blue";
  m2 = createSprite(70,75,20,50);
  m2.shapeColor="yellow";
  m3 = createSprite(100,100,40,70);
  m3.shapeColor="#2BF49F";
  m4 = createSprite(130,75,20,50);
  m4.shapeColor="orange";
  m5 = createSprite(150,200,20,300);
  m5.shapeColor="red";

  a1 = createSprite(190,200,20,300);
  a1.shapeColor="purple";
  a2 = createSprite(220,60,40,20);
  a2.shapeColor="white";
  a2 = createSprite(220,200,40,20);
  a2.shapeColor="pink";
  a4 = createSprite(250,200,20,300);
  a4.shapeColor="blue";
  
  r1 = createSprite(290,200,20,300);
  r1.shapeColor="pink";
  r2 = createSprite(335,60,70,20);
  r2.shapeColor="purple";
  r3 = createSprite(335,150,70,20);
  r3.shapeColor="#565BBC";
  r4 = createSprite(360,105,20,70);
  r4.shapeColor="#00FF36";
  r5 = createSprite(330,210,20,100);
  r6 = createSprite(350,305,20,90);
  r6.shapeColor="yellow";

  c1 = createSprite(400,200,20,300);
  c1.shapeColor="green";
  c2 = createSprite(430,60,40,20);
  c2.shapeColor="orange";
  c3 = createSprite(430,340,40,20);
  c3.shapeColor="blue";

  e1 = createSprite(480,200,20,300);
  e1.shapeColor="#D9BAE7";
  e2 = createSprite(510,60,40,20);
  e2.shapeColor="#29F4F7";
  e3 = createSprite(510,220,40,20);
  e3.shapeColor="#FBFF00";
  e4 = createSprite(510,340,40,20);
  e4.shapeColor="#FF9300";


  drawSprites();
}