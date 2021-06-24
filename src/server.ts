import 'reflect-metadata';
import 'dotenv/config'

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'

import routes from './routes';
import uploudConfig from './config/uploud';

import './database';
import AppError from './errors/AppError';

const app = express();

app.use(express.json())
app.use('/files', express.static(uploudConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Erro interno do servidor',
    })
});

app.listen(3333, () => {
    console.log('🚀 Aplicação iniciada na porta 3333')
}); 