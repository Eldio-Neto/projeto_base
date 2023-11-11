import { Request, Response } from "express";
type InitialEntity = {
    index: (req: Request, res: Response) => void
}

export default InitialEntity;