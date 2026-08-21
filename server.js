import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("."));

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
            model: "openai/gpt-oss-20b",
        });

        res.json({
            respuesta: chatCompletion.choices[0].message.content,
        });

    } catch (error) {
        console.error("ERROR COMPLETO:", error);
        console.error("MENSAJE:", error.message);

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor iniciado en http://localhost:3000");
});

