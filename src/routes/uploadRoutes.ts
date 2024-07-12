// src/routes/uploadRoutes.ts
import express from 'express';
import { uploadFile, handleFileUpload } from '../controllers/uploadController.js';
import { auth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/upload', auth, uploadFile, handleFileUpload);

export default router;
