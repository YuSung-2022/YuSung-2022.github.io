class Component {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visible = true;
  }
  getType() {
    return "unknown";
  }
  update() {}
}

class Bird extends Component {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.status = 1;
  }
  getType() {
    return "Bird";
  }
  update() {
    if (this.visible) {
      //挖洞 3
      if(this.status == 1){
        this.x += 1;
        if(this.x % 50 < 25){
          let image = document.getElementById("1");
          ctx.drawImage(image, 0, 0, 419, 265, this.x, this.y, 50, 50);
        }
        else{
          let image = document.getElementById("3");
          ctx.drawImage(image, 0, 0, 418, 265, this.x, this.y, 50, 50);
        }
      }
      else if(this.status == 2){
        this.y += 1;
        let image = document.getElementById("5");
        ctx.drawImage(image, 0, 0, 549, 351, this.x, this.y, 50, 50);
      }
      
        
        
        
      /////////////////////////////////////////////////////////
    }
  }
}

class Gun extends Component {
  constructor(x, y) {
    super(x, y, 50, 150);
  }
  getType() {
    return "Gun";
  }
  update() {
    if (this.visible) {
      let image = document.getElementById("gun");
      ctx.drawImage(image, 0, 0, 116, 403, this.x, this.y, 50, 150);
    }
  }
}

class Bullet extends Component {
  constructor(x, y, index) {
    super(x, y, 10, 40);
    this.index = index;
  }
  getType() {
    return "Bullet";
  }
  update() {
    if (this.index > bulletCount) {
      this.visible = false;
    }
    if (this.visible) {
      let image = document.getElementById("bullet");
      ctx.drawImage(image, 0, 0, 10, 40, this.x, this.y, 10, 40);
    }
  }
}

class Fire extends Component {
  constructor(x, y, index) {
    super(x, y, 10, 70);
    this.index = index;
  }
  getType() {
    return "Fire";
  }
  update() {
    if (this.visible) {
      let image = document.getElementById("fire");
      ctx.drawImage(image, 0, 0, 18, 129, this.x, this.y, 10, 70);
      this.y = this.y - 5;
    }
  }
}
