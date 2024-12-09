import { Ability, Character, CharacterAttributes, CharacterClass, Item } from "./types";

export class GameCharacter implements Character {
    name: string;
    classType: CharacterClass;
    attributes: CharacterAttributes;
    level: number;
    experience: number;
    abilities: Ability[];
    inventory: Item[];

    constructor(name: string, classType: CharacterClass, attributes: CharacterAttributes) {
        this.name = name;
        this.classType = classType;
        this.attributes = attributes;
        this.level = 1;
        this.experience = 0;
        this.abilities = [];
        this.inventory = [];
    }

    // Метод для получения опыта
    gainExperience(amount: number) {
        this.experience += amount;
        // Логика для повышения уровня
    }
}