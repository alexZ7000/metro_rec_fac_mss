export default class MainError extends Error {
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}
