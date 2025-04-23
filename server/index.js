import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenAI } from '@google/genai'

dotenv.config()

const app = express()

const corsOptions = {
    origin: process.env.FRONTEND_URL, // Replace with your frontend's exact origin
    methods: 'POST, OPTIONS', // Specify allowed methods for your route
    allowedHeaders: 'Content-Type', // Specify allowed headers
}
console.log('CORS options:', corsOptions)

app.use(cors(corsOptions))
app.use(express.json())

const port = process.env.PORT || 3001

const googleGenAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY })

app.post('/api/translate', async (req, res) => {
    const { sourceText, sourceLanguage, targetLanguage } = req.body

    try {
        const response = await googleGenAI.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: `${sourceText} {{${sourceLanguage}}} [[${targetLanguage}]]`,
            config: {
                systemInstruction: 'You are an AI who translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and `]]`. The text may have break lines, keep it in mind. Please give your answer in plain text without surrounding it with any characters. Do not add period or full stop unless the original text has it.',
            }
        })

        const translatedText = response.text

        res.json({ translation: translatedText })
    } catch (error) {
        console.error('GoogleGenAI Error:', error)
        res.status(500).json({ error: 'Translation failed' })
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})