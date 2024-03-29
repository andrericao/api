const taskModel = require('../model/tasksModel');

const getAll = async (req, res) => {

  const tasks = await taskModel.getAll();
  
  return res.status(200).json(tasks);

};

module.exports = {
  getAll
};