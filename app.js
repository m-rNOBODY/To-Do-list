
const connectDB= require('./db/connect');

const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
process.env.P

app.use(express.json())


const tasks=require('./routes/tasks')
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/errorHandler')


app.use(express.static('./public/'))

app.use('/api/v1/tasks/',tasks)
app.use('*',notFound)
app.use(errorHandlerMiddleware)




const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        
    } catch (error) {
        console.log(error)
    }
}

start()