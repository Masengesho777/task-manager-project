const express = require('express');
const { 
    getAlltasks,
    createtask,
    gettask,
    updatetask, 
    deletetask} = require('../controllers/tasks');
const router = express.Router();

 
router.route('/').get(getAlltasks).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)
module.exports = router