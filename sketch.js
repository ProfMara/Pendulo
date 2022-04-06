const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var bola;
var con;


function preload() {

}

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;

    solo = new Ground(200, 700, 600, 20);

    bola = Bodies.circle(300, 300, 30);
    World.add(world, bola)
    

    botao = createImg("up.png");
    botao.position(20, 30);
    botao.size(50, 50);
    botao.mouseClicked(empurrar);

     


    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
    imageMode(CENTER);

}

function draw() {
    background(0,210,235);
    fill("red");
    ellipse(bola.position.x, bola.position.y, 30);

 


    solo.show();
    Engine.update(engine);

}

function empurrar()
{
    Body.applyForce(bola, {x:0,y:0}, {x:0., y:-0.1});
}