import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

app.post("/chat", async (req, res) => {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: req.body.mensaje,
                },
            ],
            model: "llama-3.1-8b-instant",
        });

        res.json({
            respuesta: chatCompletion.choices[0].message.content,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message,
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});