import { Router } from 'express';
import * as resultController from '../controllers/result.controller';

const router = Router();

router.post('/', resultController.createResult);
router.get('/', resultController.getAllResults);
router.get('/:id', resultController.getResultById);
router.put('/:id', resultController.updateResultById);
router.delete('/:id', resultController.deleteResultById);

export default router;