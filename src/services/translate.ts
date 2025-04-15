import { GoogleGenAI } from '@google/genai'
import { SUPPORTED_LANGUAGES } from '../constants'
import { Language, SourceLanguage } from '../types.d'

// This should go in an API, this exercise is focused on REACT and TypeScript
const myKey = import.meta.env.VITE_GEMINI_API_KEY

const ai = new GoogleGenAI({ apiKey: `${myKey}` })

export async function translate ({
    sourceLanguage,
    targetLanguage,
    sourceText
}: {
    sourceLanguage: SourceLanguage,
    targetLanguage: Language,
    sourceText: string
}) {
    if (sourceLanguage === targetLanguage) return sourceText

    const sourceCode = sourceLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[sourceLanguage]
    const targetCode = SUPPORTED_LANGUAGES[targetLanguage]

    const completion = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `Translate this: ${sourceText} {{${sourceCode}}} [[${targetCode}]]`,
        config: {
            systemInstruction: 'You are an AI who translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and `]]`. Please give your answer in plain text without surrounding it with any characters.'
        }
    })

    return completion.text
}