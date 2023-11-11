import initialRouter from "./initial.routes";

import { Router } from 'express';

const routes = Router();

routes.use('/initial', initialRouter)

export default routes;