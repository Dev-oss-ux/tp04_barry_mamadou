export class Mushroom {
  id = 0;
  name = "";
  edible = false;
  poisonous = false;
  img = '';
  description = "";
  toxicity = "";
  quantity = 0;

  constructor(id: number, name: string, edible: boolean, poisonous: boolean, img: string, description: string, toxicity: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.edible = edible;
    this.poisonous = poisonous;
    this.img = img;
    this.description = description;
    this.toxicity = toxicity;
    this.quantity = quantity;
  }
}
