import { DataSource } from 'typeorm';
import { config } from 'dotenv';

import { Student } from './entities/student.entity';
import { Course } from './entities/course.entity';
import { Result } from './entities/result.entity';

config();

export const myDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Student, Course, Result]
});
