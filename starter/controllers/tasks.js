

const getAlltasks = (req, res)=>{
    res.send('getalltasks')
} 
 
const createtask = (req, res)=>{
    // res.send('createtask')
     res.json(req.body)
}

 
const gettask = (req, res)=>{
    // res.send('get asingle task')
    res.json({id: req.params.id})
}

 
const updatetask = (req, res)=>{
    res.send('updatetask')
}

const deletetask = (req, res)=>{
    // res.send('delete task')
    res.json({id: req.params.id})
   
}

module.exports = {
    getAlltasks,
    createtask,
    gettask,
    updatetask, 
    deletetask

}  