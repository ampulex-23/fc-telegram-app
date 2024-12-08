import { Atack } from "./atack"
import { Defend } from "./defend"
class Character
{
    public HP : number
    public atacks : []
    public defends : []
    public skin : File
    public atack : Atack
    public defend : Defend
    public setAtack(value : number)
    {
        this.atack = this.atacks[value]
    }
    public DoAtack(enemy : Character) 
    {
        enemy.getDamage(this)
    }
    private getDamage(enemy : Character)
    {
       if (enemy.atack.spetionAtack !== this.defend.spetionDefend)
       {
            this.HP -= enemy.atack.damage - this.defend.defend
       }
       else
       {
        this.HP -= enemy.atack.damage
       }
    }
}