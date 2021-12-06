let router = require('express').Router();

//my routes
router.get('/index', (req, res) => {
    res.status(200).render('../views/mainpages/index.ejs');
})

router.get('/a', (req, res) => {
    res.status(200).render('../views/mainpages/About_us.ejs');
})

router.get('/c', (req, res) => {
    res.status(200).render('../views/mainpages/Contact_us.ejs');
})

router.get('/*', (req, res) => {
    res.status(404).render('../views/mainpages/404.ejs');
})
module.exports = router;