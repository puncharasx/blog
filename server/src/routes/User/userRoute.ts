import { Router } from 'express'
import auth from '../../middlewares/auth'
import UserModel from '../../models/User/userModel'
import { body } from 'express-validator'
import { SignUp, SignIn, Profile } from '../../controllers/User/userController'


const router = Router()

router.post('/signup',[
    body('name').not().isEmpty().withMessage('Plase Enter Name'),
    body('lastname').not().isEmpty().withMessage('Plase Enter LastName'),
    body('email').not().isEmpty().normalizeEmail().withMessage('Email Not correct').custom(value => {
        return UserModel.findOne({email: value})
        .then(user => {
            if(user) {
                return Promise.reject('Email already in use')
            }
        })
    }),
    body('password').not().isEmpty().trim().isLength({min: 5}).withMessage('Password Not connect min length 5')
],SignUp)
router.post('/signin',SignIn)
router.get('/profile',auth,Profile)

export default router