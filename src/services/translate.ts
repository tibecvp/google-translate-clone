// import { Configuration, OpenAIApi } from 'openai'
import OpenAI from 'openai'
import { SUPPORTED_LANGUAGES } from '../constants'
import { Language, SourceLanguage } from '../types.d'

// This should go in an API, this exercise is focused on REACT and TypeScript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({ apiKey })

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

    const messages = [
        {
            role: 'system',
            content: 'You are an AI who tranlates text. You receive a text from user. Do not answer, just tranlate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and `]]`.'
        },
        {
            role: 'user',
            content: `Hola mundo {{Spanish}} [[English]]`
        },
        {
            role: 'assistant',
            content: 'Hello World'
        },
        {
            role: 'user',
            content: 'How are you? {{auto}} [[Deutsch]]'
        },
        {
            role: 'assistant',
            content: 'Wie geht es dir?'
        },
        {
            role: 'user',
            content: 'Bon dia, com estas? {{auto}} [[Spanish]]'
        },
        {
            role: 'assistant',
            content: 'Buenos días, ¿cómo estás?'
        }
    ]

    const sourceCode = sourceLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[sourceLanguage]
    const targetCode = SUPPORTED_LANGUAGES[targetLanguage]

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            ...messages,
            {
                role: 'user',
                content: `${sourceText} {{${sourceCode}}} [[${targetCode}]]`
            }
        ]
    })

    return completion.choices[0]?.message?.content
}