import { Schema, model } from 'mongoose'

interface Blog {
    title: string;
    author: string;
    content: string;
    title_img: string;
    content_type: string;
    content_img: any;
    hidden: boolean;
    meta: any

}

const schema = new Schema<Blog>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        defalut: "admin"
    },
    content: {
        type: String,
        required: true
    },
    title_img: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105_960_720.jpg'

    },
    content_img: {
        type: [{ url: String }]
    },
    hidden: {
        type: Boolean,
        default: false
    },
    meta: {
        votes: {
            type: Number,
            default: 0
        },
        favs: {
            type: Number,
            default: 0
        }
    }
},{
    timestamps: true
})

const Blog = model('Blog', schema);

export default  Blog