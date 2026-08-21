 import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

try {
    const modelos = await groq.models.list();

    console.log("MODELOS DISPONIBLES:");

    for (const modelo of modelos.data) {
        console.log("-", modelo.id);
    }
} catch (error) {
    console.error("ERROR:", error.message);
}
