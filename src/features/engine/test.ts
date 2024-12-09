import { SimpleBattle } from "./Battle";
import { GameCharacter } from "./Character";
import { Character, CharacterAttributes, CharacterClass, Item } from "./types";

// Примеры предметов
const healingPotion: Item = {
    name: "Healing Potion",
    description: "Восстанавливает 20 здоровья.",
    applyEffect: (character: Character) => {
        character.attributes.health += 20;
        console.log(`${character.name} использует ${healingPotion.name} и восстанавливает 20 здоровья!`);
    }
};

const strengthPotion: Item = {
    name: "Strength Potion",
    description: "Увеличивает силу на 5 на один ход.",
    applyEffect: (character: Character) => {
        character.attributes.strength += 5;
        console.log(`${character.name} использует ${strengthPotion.name} и увеличивает силу на 5!`);
    }
};

// Пример использования
const warriorAttributes: CharacterAttributes = {
    strength: 10,
    agility: 5,
    intelligence: 3,
    health: 100
};

const mageAttributes: CharacterAttributes = {
    strength: 5,
    agility: 3,
    intelligence: 10,
    health: 80
};

const warrior = new GameCharacter('Aragorn', CharacterClass.Warrior, warriorAttributes);
warrior.inventory.push(healingPotion);

const mage = new GameCharacter('Gandalf', CharacterClass.Mage, mageAttributes);
mage.inventory.push(strengthPotion);

const battle = new SimpleBattle([warrior, mage]);
battle.startBattle();