import { Review } from "./review";

export interface User {
    id: string;
    username: string;
    password: string;
    role: string;
    reviews: Review[];
}