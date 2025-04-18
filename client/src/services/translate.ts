import { SUPPORTED_LANGUAGES } from '../constants'
import { Language, SourceLanguage } from '../types'

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

    const response = await fetch('http://localhost:3001/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({sourceText: sourceText, sourceLanguage: sourceCode, targetLanguage: targetCode})
    })

    const data = await response.json()

    return data.translation
      
}