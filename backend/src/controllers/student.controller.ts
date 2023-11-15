import { Request, Response } from 'express';
import * as studentService from '../services/student.service';
import { StudentDTO, UpdateStudentDTO } from '../dtos/student.dto';

const createStudent = async (req: Request, res: Response) => {
  try {
    const newStudent = await studentService.createStudent(req.body as StudentDTO);
    res.json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllStudents = async (_: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const student = await studentService.getStudentById(id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      res.json(student);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedStudent = await studentService.updateStudentById(id, req.body as UpdateStudentDTO);
    if (!updatedStudent) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      res.json(updatedStudent);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await studentService.deleteStudentById(id);
    if (!success) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      res.json({ message: 'Student deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
