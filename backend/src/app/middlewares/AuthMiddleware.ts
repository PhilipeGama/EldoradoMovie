import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const Auth = (request: Request, response: Response, next: NextFunction) => {
    try {
        const { authorization } = request.headers;

        if ( typeof authorization === 'undefined'){
            return response.status(401).json({
                status: 'fail',
                data: {
                    title: 'Você não está autorizado a acessar essa página.'
                }
            })
        }

        const token = authorization.split(" ")[1];

        const auth = jwt.verify(token, "secret_key");

        return next();


    } catch (error) {
        return response.status(4001).json({
            status: "fail",
            data: {
                title: "Você não está autorizado a acessar essa página."
            }
        })
    }
}


export default Auth;