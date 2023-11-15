import { myDataSource } from '../app-data-source';
import { Student } from '../entities/student.entity';

const createStudent = async (studentData: any) => {
  const newStudent = myDataSource.getRepository(Student).create(studentData);
  return await myDataSource.getRepository(Student).save(newStudent);
};

const getAllStudents = async () => {
  return await myDataSource.getRepository(Student).find();
};

const getStudentById = async (id: any) => {
  return await myDataSource.getRepository(Student).findOne(id);
};

const updateStudentById = async (id: any, updatedData: any) => {
  await myDataSource.getRepository(Student).update(id, updatedData);
  return await myDataSource.getRepository(Student).findOne(id);
};

const deleteStudentById = async (id: any) => {
  const result = await myDataSource.getRepository(Student).delete(id);
  return result?.affected ?? 0 > 0;
};

export {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};