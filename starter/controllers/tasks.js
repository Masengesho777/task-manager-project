const Task = require('../models/Task')
const getAllTasks =async (req, res) => {
    // res.send('getallTasks')
    try{
const tasks = await Task.find({})
res.status(200).json({ tasks })
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req, res) => {
    try{
         const tasks = await Task.create(req.body)
    res.status(201).json({ tasks }) 
    }
    catch(error){
        res.status(500).json({msg:error})
    }

    // res.send('createtask')
    //  res.json(req.body)
  
}


const getTask = (req, res) => {
    // res.send('get asingle task')
    res.json({ id: req.params.id })
}


const updateTask = (req, res) => {
    res.send('updatetask')
}

const deleteTask = (req, res) => {
    // res.send('delete task')
    res.json({ id: req.params.id })

}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}  