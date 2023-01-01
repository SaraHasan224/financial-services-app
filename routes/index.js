// Full Documentation - https://docs.turbo360.co
const express = require('express');
const { app } = require('vertex360/dist/vertex/local');
const router = express.Router()

/*
router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

//  This route render json data
router.get('/json', (req, res) => {
  res.json({
    confirmation: 'success',
    app: process.env.TURBO_APP_ID,
    data: 'this is a sample json route.'
  })
})

// This route sends text back as plain text
router.get('/send', (req, res) => {
  res.send('This is the Send Route')
})

// his route redirects requests to Turbo360.
router.get('/redirect', (req, res) => {
  res.redirect('https://www.turbo360.co/landing')
})
*/


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    const time = new Date();
    req.time = time;
  console.log('Time: ', Date.now());
  next();
});

router.get("/", (req, res) => {
  res.render("index", null);
});

router.get("/cial-contact", (req, res) => {
  res.render("contact", null);
});

router.get("/cial-about", (req, res) => {
  res.render("about", null);
});

router.get("/cial-services", (req, res) => {
  res.render("services", null);
});

router.get("/cial-team", (req, res) => {
  const teamData = {
    name: 'My team'
  };

  res.render("team", teamData);
});


router.get("/query", (req, res) => {
  const name = req.query.name;
  
  res.json({
    name: name
  })
});

router.get("/path/:path", (req, res) => {
  const path = req.params.path;

  res.json({
    data: path
  })
});



router.post("/post-services", (req, res) => {
  const body = req.body;
  res.json({
    status: "success",
    data: body
  })
});


module.exports = router
