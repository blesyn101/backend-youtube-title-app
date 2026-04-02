import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { InferenceClient } from "@huggingface/inference";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const client = new InferenceClient(process.env.HF_TOKEN);

app.post('/generate-title', async (req, res) => {
    const { videoDescription } = req.body;

    if (!videoDescription || !videoDescription.trim()) {
        return res.status(400).json({ error: 'Video description is required' });
    }

    try {
        const chatCompletion = await client.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct:novita",
            messages: [
                {
                    role: "user",
                    content: `You are an expert YouTube SEO strategist. Generate 5 catchy YouTube titles for a video with the following description: ${videoDescription}. The titles should be concise, engaging, and relevant to the content. Return as a plain list with one title per line. Do not include introductory text, numbers, or bullet points.`,
                },
            ],
        });

        const text = chatCompletion.choices[0].message.content;
        const titles = text.trim().split('\n')
            .map(t => t.trim())
            .filter(t => t);

        res.json({ titles });

    } catch (error) {
        console.error('Error generating titles:', error);
        res.status(500).json({ error: 'Failed to generate titles' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});