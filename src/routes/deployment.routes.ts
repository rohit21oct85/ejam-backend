import express from 'express';
import controller from '../controllers/deployment.controller';

const router = express.Router();

router.get('/get/deployments', controller.getDeployments);
router.post('/add/deployment', controller.addDeployment);
router.delete('/delete/deployments', controller.deleteDeployments);

export default router;