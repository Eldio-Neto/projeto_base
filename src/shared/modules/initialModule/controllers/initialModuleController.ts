import { Request, Response } from "express";
import InitialEntity from "../entities/initialEntity";

class initialController {
    public static index(req: Request, res: Response) {
        res.json({ mensagem: 'Show de bola' })
    }
}

export default initialController;