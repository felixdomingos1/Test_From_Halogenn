// src/routes/dataRoutes.ts
import { Router } from 'express';
import dataController from '../controllers/dataController';

const router = Router();

router.post('/', dataController.create);
router.get('/', dataController.getAll);

export default router;
