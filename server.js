import express from 'express';

const app = express();
app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
})