import { myDataSource } from '../app-data-source';
import { Course } from "../entities/course.entity";

const createCourse = async (courseData: any) => {
  const newCourse = myDataSource.getRepository(Course).create(courseData);
  return await myDataSource.getRepository(Course).save(newCourse);
};

const getAllCourses = async () => {
  return await myDataSource.getRepository(Course).find();
};

const getCourseById = async (id: any) => {
  return await myDataSource.getRepository(Course).findOne(id);
};

const updateCourseById = async (id: any, updatedData: any) => {
  await myDataSource.getRepository(Course).update(id, updatedData);
  return await myDataSource.getRepository(Course).findOne(id);
};

const deleteCourseById = async (id: any) => {
  const result = await myDataSource.getRepository(Course).delete(id);
  return result?.affected ?? 0 > 0;
};

export {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};