import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.get("/:id", (req, res) => {
    res.send(
        `Esse é o req: ${JSON.stringify(req.method)} Hello ${JSON.stringify(req.params.id)}`
    );
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
