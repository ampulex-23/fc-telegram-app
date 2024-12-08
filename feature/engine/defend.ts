import { Atack } from "./atack"

export interface Defend 
{
     name : string
     defend : number
     image : File
     spetionDefend : Atack['name']
}