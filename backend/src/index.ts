import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { config } from 'dotenv';
import { myDataSource } from './app-data-source';

import studentRoutes from './routes/student';
import courseRoutes from './routes/course';
import resultRoutes from './routes/result';

config();

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/results', resultRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('🚀 Server is running on port: ' + PORT);
});
