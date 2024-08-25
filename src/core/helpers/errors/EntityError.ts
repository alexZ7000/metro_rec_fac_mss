import MainError from "./MainError";

export default class EntityError extends MainError {
    constructor(message: string) {
        super("EntityError: " + message);
    }
}
