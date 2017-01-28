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
    title: 'about', 
    date: currentDate});
});

//GET contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;
