import express, { Request, Response } from "express";
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const server = express();
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use('/api', routes);
server.use((req: Request, res: Response) => {
    res.json({ error: "Endpoint não encontrado" });
});

server.listen(process.env.PORT, () => {
    console.log("Server running at port " + process.env.PORT);
});