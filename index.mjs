import Character from "./Character.mjs";
import Weapon from "./Weapon.mjs";
import Armor from "./Armor.mjs";

// generate weapons
const weapon1 = new Weapon("Stormbreaker Axe", 30, 25, 80)
const weapon2 = new Weapon("Celestial rapier", 25, 18, 75)
const weapon3 = new Weapon("Obsidian Warhammer", 38, 30, 90)
const weapon4 = new Weapon("Starfire Bow", 33, 22, 85)
const weapon5 = new Weapon("Doomfang Dagger", 28, 20, 78)

// generate armors
const armor1 = new Armor("Shadowplate", 28, 15)
const armor2 = new Armor("Phantom Shroud", 22, 12)
const armor3 = new Armor("Titan's Bulwark", 35, 18)
const armor4 = new Armor("Sylvan Guardian", 30, 14)
const armor5 = new Armor("Abyssal Carapace", 25, 10)


// generate characters
const character1 = new Character("Ragnar Wolfbane", 32, 45, 87)
const character2 = new Character("Seraphina Nightshade", 27, 120, 92)
const character3 = new Character("Thagrim Ironfist", 40, 52, 95)
const character4 = new Character("Lyara Moonwhisper", 35, 29, 88)
const character5 = new Character("Draven Blackthorm", 30, 37, 90)

character1.setItemIntenvory(weapon1)
character1.setItemIntenvory(armor1)

character2.setItemIntenvory(weapon2)
character2.setItemIntenvory(armor2)

character3.setItemIntenvory(weapon3)
character3.setItemIntenvory(armor3)

character4.setItemIntenvory(weapon4)
character4.setItemIntenvory(armor4)

character5.setItemIntenvory(weapon5)
character5.setItemIntenvory(armor5)

//console.log(character5.inventory[0].name)

const weapons = []
weapons.push(weapon1, weapon2, weapon3, weapon4, weapon5)

const armors = []
armors.push(armor1, armor2, armor3, armor4, armor5)

const characters = []
characters.push(character1, character2, character3, character4, character5)


//console.log(weapons)
console.log(characters)

//listWeapons(weapons)
console.log(" ")
console.log(" ")
//listArmors(armors)
console.log(" ")
console.log(" ")
//listCharapters(characters)
console.log(" ")
console.log(" ")
//selectArmor(armors)
console.log(" ")
console.log(" ")
//addWeapons()

function listWeapons(weapons) {
  // add weapons
  character1.setItemIntenvory(weapon1)
  character2.setItemIntenvory(weapon2)
  character3.setItemIntenvory(weapon3)
  character4.setItemIntenvory(weapon4)
  character5.setItemIntenvory(weapon5)

  // print weapons
  console.log("Weapon list")
  console.log("------------")
  for (let i = 0; i < weapons.length; i++) {
    const element = weapons[i];

    console.log(element.name + ": Min Level = ", element.minLevel + ", Damage = " + element.damage + ", Durability = " + element.durability)

  }
}

function listArmors(armors) {
  // add armor
  character1.setItemIntenvory(armor1)
  character2.setItemIntenvory(armor2)
  character3.setItemIntenvory(armor3)
  character4.setItemIntenvory(armor4)
  character5.setItemIntenvory(armor5)

  // print armor
  console.log("Armor list")
  console.log("------------")
  for (let i = 0; i < armors.length; i++) {
    const element = armors[i];

    console.log(element.name + ": Min Level = ", element.minLevel + ", Defense = " + element.defense)

  }
}

function listCharapters(characters) {
  console.log("CHARACTER LIST")
  console.log("------------")
  for (let i = 0; i < characters.length; i++) {
    const element = characters[i];

    console.log(element.name)
    console.log("------------")
    console.log("")

    console.log("Atributes:")
    console.log("------------")
    console.log("Level: " + element.level)
    console.log("Age: " + element.age)
    console.log("Stamina: " + element.stamina)
    console.log("------------")

    console.log("Weapons:")
    console.log("------------")
    console.log("Name: " + element.inventory[0].name)
    console.log("Min Level: " + element.inventory[0].minLevel)
    console.log("Damage: " + element.inventory[0].damage)
    console.log("Durability: " + element.inventory[0].durability)
    console.log("------------")

    console.log("Armors:")
    console.log("------------")
    console.log("Name: " + element.inventory[1].name)
    console.log("Min Level: " + element.inventory[1].minLevel)
    console.log("Defense: " + element.inventory[1].defense)
    console.log("------------")

  }
}

function selectArmor(armors) {
  console.log("Armor with level less than 30")
  console.log("------------")
  for (let i = 0; i < armors.length; i++) {
    const element = armors[i];

    if (element.minLevel < 30) {
      console.log("Name: " + element.name + " Level: " + element.minLevel)
    }
  }
}

function addWeapons() {
  for (let i = 0; i < characters.length; i++) {
    characters[i].inventory[0] = []
    const characterLevel = characters[i].level;
    console.log("Name: " + characters[i].name + " Level: " + characters[i].level)
    for (let j = 0; j < weapons.length; j++) {
      const weaponLevel = weapons[j].minLevel;
      // console.log(characterLevel)
      // console.log(weaponLevel)
      if (characterLevel >= weaponLevel) {
        characters[i].setItemIntenvory(weapons[j])
      }
    }

    for (let k = 0; k < characters[i].inventory.length; k++) {
      const weapons = characters[i].inventory[k];

      if (weapons.durability) {
        console.log("Weapon name : " + weapons.name + " Durability: " + weapons.durability)
      }

    }
    console.log(" ")
    console.log(" ")
  }
  //console.log(character4)

}