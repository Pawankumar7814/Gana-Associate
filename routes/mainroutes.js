let router = require('express').Router();

//my routes
router.get('/index', (req, res) => {
    res.status(200).render('../views/index.ejs');
})

router.get('/a', (req, res) => {
    res.status(200).render('../views/About_us.ejs');
})

router.get('/c', (req, res) => {
    res.status(200).render('../views/Contact_us.ejs');
})

module.exports = router;