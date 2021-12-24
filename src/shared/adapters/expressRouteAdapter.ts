import { Request, Response } from "express";

import { AppError } from "../helpers";
import { IController } from "../protocols";
import { HttpRequest } from "../protocols/http";

export const adaptRoute = (controller: IController) => {
    return async (req: Request, res: Response): Promise<Response> => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params,
            file: req.file,
        };

        try {
            const httpResponse = await controller.handle(httpRequest);

            return res.status(httpResponse.statusCode).json(httpResponse.body);
        } catch (error) {
            if (error instanceof AppError)
                return res.status(error.statusCode).json({
                    error: error.message,
                });

            console.log(error.message);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
};
