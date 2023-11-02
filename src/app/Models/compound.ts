import { Building } from "./building";

export interface Compound  {
    Id: number;
    Name: string;
    Description: string;
    Address: string;
    Latitude:number;
    Longitude:number;
    DateAdded:Date;
    File: string;
    Street_area: number;
    GreenArea:number;
    BuildingArea:number;
    CompoundId: number;
    buildings: Building[];
}
