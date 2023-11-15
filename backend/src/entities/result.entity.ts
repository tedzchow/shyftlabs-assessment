import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';
import { Course } from './course.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Student, (student) => student.results, { cascade: true, nullable: false})
  @JoinColumn({ name: 'studentId', referencedColumnName: 'id' })
  student!: Student;

  @ManyToOne(() => Course, (course) => course.results, { cascade: true, nullable: false })
  @JoinColumn({ name: 'courseId', referencedColumnName: 'id' })
  course!: Course;

  @Column({ nullable: false})
  score!: string;
}