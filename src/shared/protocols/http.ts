import { Readable } from "stream";

export interface IFile {
    fieldname: string;
    originalname: string;
    mimetype: string;
    size: number;
    stream: Readable;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
}

export type HttpResponse = {
    statusCode: number;
    body?: any;
};

export type HttpRequest = {
    body?: any;
    file?: IFile;
    userId?: string;
    headers?: any;
    params?: {
        [key: string]: string;
    };
};
