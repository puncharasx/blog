import { Schema, model } from 'mongoose'
interface User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
}

const schema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: 'user'
    },
},{
    timestamps: true
})

const User = model('User',schema)

export default User