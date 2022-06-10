class Block {
    numberOfElements = random(1, 6);
    coords = [];
    constructor(x,y, area){
      this.x = x;
      this.y = y;
      this.area = area*1.1;
      this.calcCoords();
      console.log(this.coords);
    }
    
    calcCoords(){
      for(let i = 0; i < this.numberOfElements; i++){  
        const coordinate = {
          x: random(0, this.area) - this.area /2, 
          y: random(0, this.area) - this.area /2, 
        }
         this.coords.push(coordinate); 
      }
    }
  
    display(){
      push();
      translate(this.x, this.y);
      colorMode(HSB,360,100,100);
      fill(0, 100);
      stroke(0, 100, 50, 30);
      let size = random(4, 80);
      this.coords.forEach((coord, i, arr) => {
        ellipse(coord.x, coord.y,size,size);
        if(i === arr.length -1){
          line(coord.x, coord.y, arr[0].x, arr[0].y);  
        }else{
         //line(coord.x, coord.y, arr[i + 1].x, arr[i + 1].y); 
        }
      let offset = random(0, 100)
      fill(coord.x+offset, this.y/(height/100), 100,);
      });
      pop();
    }
  }
  
  
  function setup(){
    createCanvas(450,450);
    colorMode(HSB,360,100,100,100);
    rectMode(CENTER);
    background(10, 60, 15, 90);
    const blocks = [];
    let step = 50;
    let step2 = 75;
     for(let x = step; x < width; x+= step){
      stroke(255);
      strokeWeight(1);
      line(x,0,x,height);
      for(let y = step2; y < height; y+= step2-(y/10)){
        line(0,y,width,y);
        console.log("x",x,"y",y);
        const block = new Block(x,y,step);
        blocks.push(block);
      }
      // end of y
    }// end of x
  
    blocks.forEach(function(element){
      element.display();
    });
  }
  
  