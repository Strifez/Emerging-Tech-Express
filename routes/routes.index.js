let express = require('express');
let router = express.Router();

//global Route Variables
let currentDate = new Date();
currentDate = currentDate.toLocaleTimeString();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Home', 
    date: currentDate});
});

// GET about page
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About', 
    date: currentDate});
});

//GET project page
router.get('/project', (req, res) => {
  res.render('projects', {
    title: 'Projects'
  });
});

//GET service page
router.get('/services', (req, res) => {
  res.render('services', {
    title: 'Services'
  });
});

//GET contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});


module.exports = router;
