import { Request, Response } from "express";

import { IController } from "../protocols";
import { HttpRequest } from "../protocols/http";

export const adaptRoute = (controller: IController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params,
        };

        const httpResponse = await controller.handle(httpRequest);

        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            return res.status(httpResponse.statusCode).json(httpResponse.body);
        }

        return res.status(httpResponse.statusCode).json({
            error: httpResponse?.body?.message || "Internal server error",
        });
    };
};
