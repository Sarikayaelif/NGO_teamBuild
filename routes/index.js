import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from express!');
})

router.get('/elif', (req, res) => {
    res.send(`this is elif's page`);
})

router.get('/jacob', (req, res) => {
    res.send(`this is jacob's page`);
})
//export the router and make it available to app.js
export default router;