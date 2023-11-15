import { Request, Response } from 'express';
import * as courseService from '../services/course.service';
import { CourseDTO, UpdateCourseDTO } from '../dtos/course.dto';

const createCourse = async (req: Request, res: Response) => {
  try {
    const newCourse = await courseService.createCourse(req.body as CourseDTO);
    res.json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllCourses = async (_: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const course = await courseService.getCourseById(id);
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
    } else {
      res.json(course);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedCourse = await courseService.updateCourseById(id, req.body as UpdateCourseDTO);
    if (!updatedCourse) {
      res.status(404).json({ message: 'Course not found' });
    } else {
      res.json(updatedCourse);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await courseService.deleteCourseById(id);
    if (!success) {
      res.status(404).json({ message: 'Course not found' });
    } else {
      res.json({ message: 'Course deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};