import { Unit } from "./unit";
import { WishList } from "./wish-list";

export interface WishlistUnit {
  Id:number;
  WihslistId:number;
  wishlist:WishList;
  user_Id:string;
  UserName:string;
  UnitId:number;
  Unit:Unit;
}
