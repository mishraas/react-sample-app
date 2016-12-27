import express from 'express';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';
import mongoose from 'mongoose';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import apiRouter from './api/apiRouter.js';
import routes from './web/app/router/routes';

var app = express();

app.use(compression());

// use morgan to log requests to the console
app.use(morgan('dev'));

/*mongoose.connect(config.database, function(err) {
	if (err) {
		console.log(err);
	}
	else{
		console.log('connection to mongo successful.')
				var Quest = mongoose.model('Question', { heading: String, id:String, answer:String });

				questions.map(function(v, i){
					var question = new Quest(v);
					question.save(function (err) {
					  if (err) {
					    console.log(err);
					  } else {
					    console.log('saved'+i);
					  }
					});
				});
	}
});
*/


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}))
app.use(express.static('./web/node_modules/bootstrap/dist'));

// All API Routes
app.use('/api', apiRouter);


// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>Investment Portfolio</title>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})
