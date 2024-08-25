import MainError from "./MainError";

export class InvalidRequest extends MainError {
    constructor(parameter?: string) {
        if (parameter) super(parameter + " not found");
        else super("No request found");
    }
}

export class InvalidParameter extends MainError {
    constructor(parameter: string, value: string) {
        super(`Invalid parameter: ${parameter}: ${value}`);
    }
}

export class MissingParameter extends MainError {
    constructor(parameter: string) {
        super(`Missing parameter: ${parameter}`);
    }
}

export class UserNotAuthenticated extends MainError {
    constructor(message?: string) {
        if (message) super(message);
        else super("User not authenticated");
    }
}

export class UserNotAllowed extends MainError {
    constructor(message?: string) {
        if (message) super(message);
        else super("User not allowed");
    }
}

export class NotFoundError extends MainError {
    constructor(message: string) {
        super(message);
    }
}

export class ConflictError extends MainError {
    constructor(message: string) {
        super(message);
    }
}
