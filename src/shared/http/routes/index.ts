import initialRouter from "./initial.routes";

import { Router } from 'express';

const routes = Router();

routes.use('/program', initialRouter)
//routes.use('/program', () => { console.log('filhja') })

export default routes;