let express = require('express');
let router = express.Router();

//global Route Variables
let currentDate = new Date();
currentDate = currentDate.toLocaleTimeString();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Contents/index', { 
    title: 'Home', 
    date: currentDate});
});

// GET about page
router.get('/about', (req, res) => {
  res.render('Contents/about', { 
    title: 'About', 
    date: currentDate});
});

//GET project page
router.get('/project', (req, res) => {
  res.render('Contents/projects', {
    title: 'Projects'
  });
});

//GET service page
router.get('/services', (req, res) => {
  res.render('Contents/services', {
    title: 'Services'
  });
});

//GET contact page
router.get('/contact', (req, res) => {
  res.render('Contents/contact', {
    title: 'Contact'
  });
});


module.exports = router;
