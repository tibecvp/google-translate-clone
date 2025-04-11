import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'
import { SUPPORTED_LANGUAGES } from '../constants'
import { Language, SourceLanguage } from '../types.d'

// This should go in an API, this exercise is focused on REACT and TypeScript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

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
            role: ChatCompletionRequestMessageRoleEnum.System,
            content: 'You are an AI who tranlates text. You receive a text from user. Do not answer, just tranlate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and `]]`.'
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: `Hola mundo {{Spanish}} [[English]]`
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: 'Hello World'
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: 'How are you? {{auto}} [[Deutsch]]'
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: 'Wie geht es dir?'
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: 'Bon dia, com estas? {{auto}} [[Spanish]]'
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: 'Buenos días, ¿cómo estás?'
        }
    ]

    const sourceCode = sourceLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[sourceLanguage]
    const targetCode = SUPPORTED_LANGUAGES[targetLanguage]

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            ...messages,
            {
                role: ChatCompletionRequestMessageRoleEnum.User,
                content: `${sourceText} {{${sourceCode}}} [[${targetCode}]]`
            }
        ]
    })

    return completion.data.choises[0]?.message?.content
}