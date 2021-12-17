import express from "express";

const app = express();
app.use(express.json());

app.get("/courses", (request, response) => {
    const message = "Hello";

    return response.json({ message });
});

app.listen(3333);
