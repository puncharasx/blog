import { ObjectId } from 'mongoose'

export interface User {
    id?: ObjectId;
    name?: string;
    lastname?: string;
    password?: string;
    email?: string;
    role?: string;
}

export type JwtPayload = User & {
    exp: number
}