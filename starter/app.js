//console.log('Task Manager App')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
  
app.get('/hello', (req,res)=>{
    res.send('Task manager App')
})

app.use('/api/v1/tasks', tasks);
//middleware


//app.get('/api/v1/tasks')             -Gett all task
//app.post('/api/v1/tasks')            -Create a new task
//app.get('/api/v1/tasks/:id')             -Gett single task
//app.patch('/api/v1/tasks/:id')             -Update task
//app.delete('/api/v1/tasks/:id')             -delete task



const port = 5000
app.listen(port,
    console.log(`server is running on port ${port}`))

