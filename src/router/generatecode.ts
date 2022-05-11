import express from 'express';
import GenerateController from '../controllers/generate'

const router = express.Router()
router.post('/download', GenerateController.downloadCode)

export default router
