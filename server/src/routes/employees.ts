import { Router } from 'express';
import { getAllEmployees } from '../controllers/employees';

const employeesRouter = Router();

employeesRouter.get('/', getAllEmployees);

export default employeesRouter;
