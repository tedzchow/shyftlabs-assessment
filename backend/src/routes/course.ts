import { Router } from 'express';
import * as courseController from '../controllers/course.controller';

const router = Router();

router.post('/', courseController.createCourse);
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.updateCourseById);
router.delete('/:id', courseController.deleteCourseById);

export default router;