import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from express!');
})

app.get('/elif', (req, res) => {
    res.send(`this is elif's page`);
})

app.get('/jacob', (req, res) => {
    res.send(`this is jacob's page`);
})

app.listen(port,  () => {
  console.log(`Server running at port:${port}/`);
});