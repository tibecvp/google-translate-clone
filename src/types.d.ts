export interface State {
    sourceLanguage: string
    targetLanguage: string
    sourceText: string
    translatedText: string
    loading: boolean
}

export type Action = 
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_SOURCE_LANGUAGE', payload: string }
    | { type: 'SET_TARGET_LANGUAGE', payload: string }
    | { type: 'SET_SOURCE_TEXT', payload: string }
    | { type: 'SET_TRANSLATED_TEXT', payload: string }
