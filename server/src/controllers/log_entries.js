'use strict';

require('../models/log_entry ')

exports.index = function(req,res){
    LogEntry.find({}, function(err,LogEntry){
        if (err) res.send(err)
        res.json(LogEntry)
    })
}

exports.create = function(req, res) {
    const newLogEntry = new LogEntry(req.body)
    newLogEntry.save(function(err, LogEntry){
        if (err) res.send(err)
        res.json(LogEntry)
    })
}

exports.show = function(req,res) {
    LogEntry.findById(req.params.id,function(err,LogEntry){
        if (err) res.send(err)
        res.json(LogEntry)
    })
}

exports.update = function(req,res){
    LogEntry.findOneAndUpdate({_id: req.params.id},req.body,{new: true},function(err,LogEntry){
        
    })
}