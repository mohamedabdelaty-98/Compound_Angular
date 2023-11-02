import { Unitcomponent } from "./unitcomponent";

export interface Unit  {
    Id: number;
    UnitNumber: number;
    Floor:number;
    Description: string;
    NumberOfBedrooms: number;
    status:string;
    Price:number;
    Area:number;
    BulidingNumber: number;
    unitcomponents: Unitcomponent[];
}
