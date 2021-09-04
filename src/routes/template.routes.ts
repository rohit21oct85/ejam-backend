import express from 'express';
import controller from '../controllers/template.controller';

const router = express.Router();

router.get('/get/templates/:template_id?', controller.getTemplates);
router.post('/add/template', controller.addTemplate);

export = router;