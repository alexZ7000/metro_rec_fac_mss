interface event {
    headers: string | { [key: string]: any };
    body: string | { [key: string]: any };
    queryStringParameters: string | { [key: string]: any };
}

export class HttpResponse {
    statusCode: number;
    headers: {
        "Content-Type": "application/json";
        "Access-Control-Allow-Origin": "*";
    };
    body: {
        message: string;
        data: {
            [key: string]: any;
        } | null;
    };

    constructor(
        statusCode: number,
        body: { [key: string]: any } | null,
        message: string
    ) {
        this.statusCode = statusCode;
        this.headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        };
        this.body = {
            message: message,
            data: body
        };
    }

    public toJSON(): { [key: string]: any } {
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            body: JSON.stringify(this.body)
        };
    }
}

export class HttpRequest {
    headers: { [key: string]: any };
    body: {
        body: { [key: string]: any };
        queryStringParameters: { [key: string]: any };
    };
    constructor(event: event) {
        this.headers = this.getHeaders(event);
        this.body = this.getBody(event);
    }

    private getHeaders(event: event) {
        if (typeof event.headers === "string") return JSON.parse(event.headers);
        return event.headers;
    }

    private getBody(event: event) {
        const body: {
            body: { [key: string]: any };
            queryStringParameters: { [key: string]: any };
        } = { body: {}, queryStringParameters: {} };
        if (typeof event.body === "string") body.body = JSON.parse(event.body);
        else body.body = event.body;
        if (typeof event.queryStringParameters === "string")
            body["queryStringParameters"] = JSON.parse(
                event.queryStringParameters
            );
        else body["queryStringParameters"] = event.queryStringParameters;
        return body;
    }
}

export class OK extends HttpResponse {
    constructor(body: { [key: string]: any }, message: string) {
        super(200, body, message);
    }
}

export class Created extends HttpResponse {
    constructor(body: { [key: string]: any }, message: string) {
        super(201, body, message);
    }
}

export class BadRequest extends HttpResponse {
    constructor(message: string) {
        super(400, null, message);
    }
}

export class Unauthorized extends HttpResponse {
    constructor(message: string) {
        super(401, null, message);
    }
}

export class Forbidden extends HttpResponse {
    constructor(message: string) {
        super(403, null, message);
    }
}

export class NotFound extends HttpResponse {
    constructor(message: string) {
        super(404, null, message);
    }
}

export class Unprocessable_Entity extends HttpResponse {
    constructor(message: string) {
        super(422, null, message);
    }
}

export class Conflict extends HttpResponse {
    constructor(message: string) {
        super(409, null, message);
    }
}

export class ParameterError extends HttpResponse {
    constructor(message: string) {
        super(422, null, message);
    }
}

export class InternalServerError extends HttpResponse {
    constructor(message: string) {
        super(500, null, message);
    }
}
