// App
// Jason Huang 
// Contains all the middleware, imports and error handlers

//Include all of our middleware - internal and external modules
let express = require('express');
let path = require('path'); //part of node.js core
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

//import "mongoose"
let mongoose = require('mongoose');

//URI
let URI = "mongodb://localhost/videogames";
//let URI = "mongodb://Jason:123456@ds011158.mlab.com:11158/videogames";

mongoose.connect(URI,(err)=> {
  if(err)
  {
    console.log("Error connecting to MONGO DB server" + err);
  } else {
    console.log("Connected to Mongo DB!");
  }
})

let index = require('./routes/routes.index');
//let users = require('./routes/routes.users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(routes);

app.use('/', index);
//app.use('/about', about);
//app.use('/users', users);

//contact page
//source: https://blog.ragingflame.co.za/2012/6/28/simple-form-handling-with-express-and-nodemailer
//app.get('/contact', index) 
/*app.post('/contact', (req,res) => {
  let mailOptions, mailerTrans;

  mailerTrans = nodemailer.createTransport('Setup', {
    service: 'Gmail',
    auth: {
      user: "polycistronix@gmail.com",
      pass: ""
    }
  });

  mailOptions = {
    from: req.body.name + ' @lt;' + req.body.email + '@gt;',
    to: 'me',
    subject: 'Contact Form',
    text: req.body.message
  };

  mailerTrans.sendMail(mailOptions, (error, response) => {
    if (error)
    {
      res.render('contact', {title: 'Jason Huang - Contact Page', msg: 'Error Occured, message not sent', err: true, page: 'contact'})
    }
    else
    {
      res.render('contact', {title: 'Jason Huang - Contact Page', msg: 'Sent!', err: false, page: 'contact'})
    }
  });
});*/


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
