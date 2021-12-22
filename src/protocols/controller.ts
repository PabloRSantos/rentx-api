import { HttpRequest, HttpResponse } from "./http";

export interface IController {
    handle(params: HttpRequest): Promise<HttpResponse>;
}
