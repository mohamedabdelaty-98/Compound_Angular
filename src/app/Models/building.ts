import { Unit } from "./unit";

export interface Building {
    Id: number;
    BulidingNumber: number;
    Description: string;
    NumberOfFloor: number;
    status:string;
    Latitude:number;
    Longitude:number;
    DateAdded:Date;
    SizeArea:number;
    CompoundId: number;
    Units: Unit[];
}

