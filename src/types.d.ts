import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type SourceLanguage = Language | AutoLanguage

export interface State {
    sourceLanguage: SourceLanguage
    targetLanguage: Language
    sourceText: string
    translatedText: string
    loading: boolean
}

export type Action = 
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_SOURCE_LANGUAGE', payload: SourceLanguage }
    | { type: 'SET_TARGET_LANGUAGE', payload: Language }
    | { type: 'SET_SOURCE_TEXT', payload: string }
    | { type: 'SET_TRANSLATED_TEXT', payload: string }

    export enum SectionType {
        Source = 'source',
        Target = 'target'
    }
