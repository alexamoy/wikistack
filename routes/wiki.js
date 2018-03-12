const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', function (req, res, next)
{
    res.redirect('/');
});

router.post('/', function (req, res, next)
{
    const page = Page.build({
        title: req.body.title,
        content: req.body.content,
        // urlTitle: generateUrlTitle(req.body.title)
    })

    page.save().then(function (value)
    {
        res.redirect('/wiki');
    });
});

router.get('/add', function (req, res, next)
{
    res.render('addpage');

});

router.get('/:urlTitle', function (req, res, next)
{
    
});

module.exports = router;