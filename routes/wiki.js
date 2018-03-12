const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next)
{
    res.send('fkdalfjdksf');
});

router.post('/', function (req, res, next)
{
    res.send('Second fkdalfjdksf');
});

router.get('/add', function (req, res, next)
{
    res.send('Third fkdalfjdksf');
});

module.exports = router;