const Task = require('../models/Task')

const getAllTasks =async (req, res) => {
    res.send('getallTasks')
    try{
const tasks = await Task.find({})
res.status(200).json({tasks})
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


const getTask = async(req, res) => {
    // res.send('get asingle task')
    
    try{
        const{id:taskID} = req.params

        const task = await Task.find({_id:taskID});
        res.status(200).json({task})
        }
            catch(error){

    }
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