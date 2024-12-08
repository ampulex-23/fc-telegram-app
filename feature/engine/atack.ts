import { Defend } from "./defend"

export interface Atack
{
    name : string
    damage : number
    image : File
    spetionAtack : Defend['name']
}