'use strict';
import express from 'express';
//var config =require('../config');

/* Load mock JSON data */
var questions = require('./models/questions');

var router = express.Router();

// define the API route
router.get('/', function(req, res) {
    res.send('API is at /api/* ');
});

// route to return all questionss (GET http://localhost:8080/api/uquestionss)
router.get('/questions/:id', function(req, res) {
    /*User.find({}, function(err, questions) {
        res.json(questions);
    });*/
	var id = req.params.id;console.log("-------------");console.log(questions);
    var question = questions.filter(function(v , i){
    	if(id==v.id){
    		return v;
    	}

    });
	res.send(question[0]);

});




module.exports = router;
