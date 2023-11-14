const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    // try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    // res.send('Here are all tasks you are looking for!')
});

const createTask = asyncWrapper(async (req, res) => {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const tasks = await Task.findOne({ _id: taskID });
    if (!tasks) {
        return next(createCustomError(`no task with id :${taskID}`, 404))
    }
    // res.status(200).json({task})
    // } catch (error) {
    // res.status(500).json({msg:error})
})

const deleteTask = asyncWrapper(async (req, res) => {
    // try {
    const { id: taskID } = req.params;
    const tasks = await Task.findOneAndDelete({ _id: taskID });
    if (!tasks) {
        return next(createCustomError(`no task with id :${taskID}`, 404))
    }
    // res.status(200).json({task})
    // res.status(200).send()
    res.status(200).json({ tasks: null, status: 'success' })
    //} catch(error){
    //  res.satus(500).json({msg: error})
})

const updateTask = asyncWrapper(async (req, res) => {
    //try {
    const { id: taskID } = req.params;
    const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!tasks) {
        return next(createCustomError(`no task with id :${taskID}`, 404))
    }
    res.status(200).json({ tasks })
    // } catch (error){
    ///res.status(500)({msg:error})
    // }
})

const editTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
            overwrite: true,
        })
        if (!tasks) {
            return res.status(404).json({ msg: `no task with id : ${tasks}` })
        }
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
}