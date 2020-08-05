'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('BarberShops');

exports.list_all_barbers = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_barber = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_barber = function(req, res) {
  console.log("Request id:" + req.query.id);
  Task.findById(req.query.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_barber = function(req, res) {
  Task.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_barber = function(req, res) {
  Task.remove({
    _id: req.params._id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Barber Shop is successfully deleted' });
  });
};