import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Result } from './result.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;
 
  @Column({ nullable: false })
  name!: string;

  @OneToMany(() => Result, (result) => result.course)
  results!: Result[];
}