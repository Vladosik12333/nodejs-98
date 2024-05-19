import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const PORT = 3000;
const app = express();

//

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.get('/p1', (_, res) => {
  res.send('hello world!!').status(234);
});

app.get('/p2', (_, res) => {
  res.send('hello world!!').status(234);
});

app.use((_, res) => {
  res.status(404).json({ message: 'This route not found' });
});

app.listen(PORT, error => {
  if (error) {
    console.log('Server crushed. error: ', error);
    process.exit(1);
  }
  console.log('Server is running on port: ', PORT);
});
