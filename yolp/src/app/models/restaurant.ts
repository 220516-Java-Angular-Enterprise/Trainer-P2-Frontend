import { Review } from "./review";

export interface Restaurant {
    id: string;
    name: string;
    city: string;
    state: string
    reviews: Review[]
}