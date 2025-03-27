
export default class Character {
  constructor(name, level, age, stamina,) {
    this.name = name;
    this.level = level;
    this.age = age;
    this.stamina = stamina;
    this.inventory = []
  }

  setItemIntenvory(item){
    this.inventory.push(item)
  }

  getInventory(){
    return this.inventory;
  }
}