import express from 'express';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', router);

app.use(function(req, res) {
    console.log('route does not exist');
})

app.listen(port,  () => {
  console.log(`Server running at port:${port}/`);
});