
'use strict';
var mongoose = require('mongoose'),
Task = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  Task.find({}, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };
    
exports.create_a_user = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

exports.read_a_user = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
   
exports.update_a_user = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.delete_a_user = function(req, res) {
    Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'users is successfully deleted' });
    });
  };