import { Request, Response, NextFunction } from 'express'
import blogModel from '../../models/Blog/blogModel'

export const Blog = async (req: Request, res: Response, next: NextFunction,) => {
    try {
        const doc = await blogModel.find().sort({ _id: 'desc' })
        res
        .status(200)
        .json({
            status: 200,
            data: doc
        })
    }catch(err) {
        next(err)
    }
}

export const BlogById = async (req: Request, res: Response, next: NextFunction,) => {
    const { id } = req.params
    try {
        const doc = await blogModel.findById(id)
        if(!doc) {
            const error : any = new Error('Not Found')
            error.status = 404
            throw error
        }
        res
        .status(200)
        .json({
            status: 200,
            data: doc
        })
    }catch(err) {
        next(err)
    }
}

export const Insert = async (req: Request, res: Response, next: NextFunction,) => {
    const { title, author, content, content_img,title_img } = req.body;
    try {
        const create = new blogModel({
            title: title,
            author: author,
            content: content,
            title_img: title_img,
            content_img: content_img,
        });
        const save = await create.save();
        res
        .status(201)
        .json({
        status: 201,
        message: 'Created Blog!'
        });
    }
    catch (err) {
        next(err);
    }
}

export const Update = async (req: Request, res: Response, next: NextFunction,) => {
    const { title, content, content_img } = req.body;
    const { id } = req.params
    try {
        const doc: any = await blogModel.findById(id)
        if(!doc) {
            const error: any = new Error(`Not found blog id ${id}`)
            error.status = 404
            throw error 
        }
        doc.title = title
        doc.content = content
        await doc.save()
        res
        .status(200)
        .json({
            status: 200,
            message: 'Updated Successfuly ✔'

        })
    }catch(err){
        next(err)
    }
}

export const Delete = async (req: Request, res: Response, next: NextFunction,) => {
    const { id } = req.params
    try {
        const doc = await blogModel.deleteOne({ _id: id})
        if(doc.deletedCount === 0 || doc === null) {
            const error: any = new Error('Not found')
            error.status = 404
            throw error
        }
        res.status(200).json({
            status: 200,
            message: 'Deleted successfuly ✔'
        })
    }catch(err) {
        next(err)
    }
}