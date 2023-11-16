import { Request, Response } from "express";
import { sequelize } from '../../../database/pg_connection';

class initialController {
    public static async index(req: Request, res: Response) {

        try {
            await sequelize.authenticate();
            res.json({ mensagem: 'Show de bola' });
            console.log('Deu Sucesso!');
        } catch (error) {
            console.log('Deu erro', error)
        }
    }
}

export default initialController;