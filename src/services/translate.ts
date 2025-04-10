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
    const messages = [
        {
            role: ChatCompletionRequestMessageRoleEnum.System,
            content: 'You are an AI who tranlates text. You receive a text from user. Do not answer, just tranlate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and `]]`.'
        }
    ]
}