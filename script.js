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

class Card extends Component {
  constructor(x, y) {
    super(x, y, 1340, 1640);
  }
  getType() {
    return "Card";
  }
  update() {
    let today = new Date();
    let seed = today.getSeconds() % 39 + 1;
    let seed_str = seed.toString();
    let image = document.getElementById(seed_str);
    ctx.drawImage(image, 0, 0, 1340, 1550, this.x, this.y, 1340, 1550);
  }
}