//console.log('Task Manager App')


const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./Db/connect')
require('dotenv').config()


// middleware
app.use(express.json())
 
// routes
  
app.get('/hello', (req,res)=>{
    res.send('Task manager App')
})

app.use('/api/v1/tasks', tasks);
//middleware


//app.get('/api/v1/tasks')             -Gett all Task
//app.post('/api/v1/tasks')            -Create a new Task
//app.get('/api/v1/tasks/:id')             -Gett single Task
//app.patch('/api/v1/tasks/:id')             -Update Task
//app.delete('/api/v1/tasks/:id')             -delete Task
const port = 5000 
const start = async ()=>{
    try{
await connectDb(process.env.MONGO_URI)
app.listen(port, console.log(`server is running on port ${port}...`))


    }

    catch(error){
console.log(error)
    }
}
start()
