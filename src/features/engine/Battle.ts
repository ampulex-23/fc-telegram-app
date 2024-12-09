import { Character, Battle, Action } from './types';

// Реализация боя
export class SimpleBattle implements Battle {
    participants: Character[];

    constructor(participants: Character[]) {
        this.participants = participants;
    }

    startBattle() {
        console.log("Бой начался!");
        let round = 1;
        while (this.participants.some(p => p.attributes.health > 0)) {
            console.log(`Раунд ${round}`);
            for (let i = 0; i < this.participants.length; i++) {
                const attacker = this.participants[i];
                const defender = this.participants[(i + 1) % this.participants.length];
                if (attacker.attributes.health > 0) {
                    this.takeTurn(attacker, defender);
                }
            }
            round++;
        }
        this.declareWinner();
    }

    takeTurn(attacker: Character, defender: Character) {
        const action = this.determineAction(attacker);
        switch (action) {
            case Action.Attack:
                this.attack(attacker, defender);
                break;
            case Action.Defend:
                this.defend(attacker);
                break;
            case Action.UseAbility:
                if (attacker.abilities.length > 0) {
                    attacker.abilities[0].effect(defender);
                }
                break;
            case Action.UseItem:
                if (attacker.inventory.length > 0) {
                    attacker.inventory[0].applyEffect(attacker);
                }
                break;
            default:
                console.log("Неизвестное действие");
        }
    }

    private determineAction(character: Character): Action {
        // Простая логика для выбора действия: 50% шанс на атаку, 20% на защиту, 15% на использование способности, 15% на использование предмета
        const rand = Math.random();
        if (rand < 0.5) return Action.Attack;
        if (rand < 0.7) return Action.Defend;
        if (rand < 0.85) return Action.UseAbility;
        return Action.UseItem;
    }

    private attack(attacker: Character, defender: Character) {
        const attackSuccess = Math.random() < (attacker.attributes.strength / 100);
        if (attackSuccess) {
            const damage = attacker.attributes.strength - defender.attributes.agility;
            defender.attributes.health -= Math.max(damage, 0);
            console.log(`${attacker.name} атакует и наносит ${Math.max(damage, 0)} урона!`);
        } else {
            console.log(`${attacker.name} атакует, но промахивается!`);
        }
    }

    private defend(character: Character) {
        console.log(`${character.name} защищается!`);
        // Логика защиты может быть расширена, например, уменьшение урона на следующий ход
    }

    private declareWinner() {
        const winner = this.participants.find(p => p.attributes.health > 0);
        if (winner) {
            console.log(`${winner.name} победил в бою!`);
        } else {
            console.log("Бой закончился ничьей!");
        }
    }
}


