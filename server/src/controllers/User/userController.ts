import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs' 
import config from '../../config/index'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import userModel from '../../models/User/userModel'

export const SignUp = async (req: Request, res: Response, next: NextFunction,) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            const error : any = new Error('Validation not correct ❌')
            error.status = 400
            error.validation = errors.array()
            throw error

        } 
        const { name,lastname,email,password } = req.body
        const hashPassword = await bcrypt.hash(password,10)
        const doc = new userModel({
            name: name,
            lastname: lastname,
            email: email,
            password: hashPassword
        })
        const save = await doc.save()
        res.status(200).json({
            status: 200,
            message: 'Singup Successfuly !'
        })
    }catch(err) {
        next(err)
    }
}

export const SignIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body   
        const doc: any = await userModel.findOne( { email: email  } )
        console.log(doc)
         if(!doc) {
            const error :any = new Error('Not found user')
            error.status = 404
            throw error
        }
        const checkPassword = await bcrypt.compare(password,doc.password)
        if(!checkPassword) {
            const error :any = new Error('Password not correct !!')
            error.status = 400
            throw error
        }
        const token = jwt.sign({
            _id: doc._id,
        },config.JWT_SECRET,{expiresIn : '1 days'})
        const expries_in : any = jwt.decode(token)
        res.status(200).json({
            status: 200,
            message: "Login Successfuly ",
            token: token,
            expires_in: expries_in.exp,
            token_type: 'Bearer'
        })
    }catch(err) {
        next(err)
    }
}

export const Profile = (req: Request, res: Response, next: NextFunction) => {
    const { _id, email, name, lastname, role } :any = req.user
    res.status(200).json({
        user: {
            email: email,
            name: name,
            lastname: lastname,
            role: role
        }
    })
}