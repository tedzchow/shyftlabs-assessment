import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Result } from './result.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  familyName!: string;

  @Column({ type: 'date', nullable: false })
  dob!: Date;

  @Column({ nullable: false })
  email!: string;

  @OneToMany(() => Result, (result) => result.student)
  results!: Result[];
}