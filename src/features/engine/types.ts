// Основные характеристики персонажа
export interface CharacterAttributes {
    strength: number;
    agility: number;
    intelligence: number;
    health: number;
}

// Базовый интерфейс для персонажа
export interface Character {
    name: string;
    classType: CharacterClass;
    attributes: CharacterAttributes;
    level: number;
    experience: number;
    abilities: Ability[];
    inventory: Item[];
}

// Перечисление классов персонажей
export enum CharacterClass {
    Warrior = 'Warrior',
    Mage = 'Mage',
    Rogue = 'Rogue'
}

// Интерфейс для способности
export interface Ability {
    name: string;
    description: string;
    effect: (target: Character) => void;
}

// Интерфейс для предмета
export interface Item {
    name: string;
    description: string;
    applyEffect: (character: Character) => void;
}

// Интерфейс для боя
export interface Battle {
    participants: Character[];
    startBattle: () => void;
    takeTurn: (attacker: Character, defender: Character) => void;
}

// Перечисление возможных действий в бою
export enum Action {
    Attack = 'Attack',
    Defend = 'Defend',
    UseAbility = 'UseAbility',
    UseItem = 'UseItem'
}
