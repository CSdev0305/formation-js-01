import Animal from "./Animal.js";

class Chien extends Animal {
  constructor(name, age, cri) {
    super(name, age);
    this.cri = cri;
  }
  informationAnimal() {
    super.informationAnimal();
    console.log(`Cri: ${this.cri}`);
  }
}
export const varTes = 67;
export default Chien;
