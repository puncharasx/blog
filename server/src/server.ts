import  mongoose  from 'mongoose'
import app from './app'
import config from './config/index'

const PORT = config.PORT || 5000
mongoose.connect(
    config.DB,
     {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
     .then(result => {
        app.listen(PORT,():void => {
            console.log(`Running on Port: ${PORT} 🌍`)
        })
     }).catch(err => { console.log('Connectd fail please check connect database. ⛔') });

//Start app
