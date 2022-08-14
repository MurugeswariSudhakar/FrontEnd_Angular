import { User } from "./user";

export interface Attraction {
    id:number;
    name: string;
    description: string;
    address1:string;
    address2:string;
    city:string;
    state:string;
    country:string;
    zipcode:number;
    website:string;
    image:string;
    user:User;
    isDeleting: boolean;
    
//    userid!:number;
}
