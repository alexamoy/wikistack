const express = require('express');
const router = express.Router();
// var path = require('path');
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');


router.use('/wiki', wikiRouter);
// router.use('/user', userRouter);


// router.use(express.static('public'));

// router.use(function (req, res, next) {
//     console.log(req.method, req.path, res.statusCode);
//     next();
// });

// router.get('/', (req, res) => {
//     res.render('../views/index.html');
//     res.sendFile(path.join(__dirname + 'public/stylesheets/style.css'));
// });



module.exports = router;
