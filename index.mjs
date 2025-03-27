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

character4.setItemIntenvory(weapon4)
character4.setItemIntenvory(armor4)

character5.setItemIntenvory(weapon5)
character5.setItemIntenvory(armor5)

console.log(character5.inventory[0].name)

const weapon = []
weapon.push(weapon1, weapon2, weapon3, weapon4, weapon5)

const armor = []
armor.push(armor1, armor2, armor3, armor4, armor5)

console.log(weapon)
console.log(armor)

