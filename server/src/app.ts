import express, { Express, Request, Response, NextFunction} from "express";
import passport from 'passport'
import path from 'path'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

// Import Middlewares
import errorHandler from "./middlewares/errorHandler";

//Import routers
import blogRouter from './routes/Blog/blogRoute'
import userRouter from './routes/User/userRoute'


const app: Express = express()

// Middlewarey
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(passport.initialize())

app.use('/blog',blogRouter)
app.use('/user',userRouter)

app.use(errorHandler)

export default app