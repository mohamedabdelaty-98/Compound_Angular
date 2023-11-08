import { WishlistUnit } from "./wishlist-unit";

export interface WishList  {
    Id:number;
    UserId:string;
    UserName:string;
    wishlistUnits:WishlistUnit[];
}
