
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

  fumble(){
    let min = 1
    
    //random
      let r = Math.floor(Math.random() * (this.inventory.length  - min + 1) + min);
      console.log("Random number = " + r);

    // Total damage = (weapon damage + character level) /4 (rounded up)
    let weapDamage = this.inventory[r].damage
    console.log("Weapon damage: " + weapDamage)
    let totalDamage = Math.round((weapDamage + this.level) / 4)

    this.stamina = this.stamina -5
    this.inventory[r].durability -=2

  }

}