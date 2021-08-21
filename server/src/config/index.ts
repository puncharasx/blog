import dotenv from 'dotenv'
dotenv.config()

const config  = {
    PORT: process.env.PORT,
    DB: process.env.DB,
    DOMAIN: process.env.DOMAIN,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config





