import { Router } from "express";
import initialControler from '../../modules/initialModule/controllers/initialModuleController';

const initialRouter = Router();

initialRouter.get('/', initialControler.index);


export default initialRouter;
