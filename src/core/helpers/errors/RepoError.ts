import MainError from "./MainError";

export class NotFoundError extends MainError {
    constructor(message: string) {
        super(message + " not found");
    }
}

export class QueryError extends MainError {
    constructor(message: string) {
        super(message);
    }
}
