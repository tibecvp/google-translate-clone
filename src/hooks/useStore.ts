import { useReducer } from 'react'
import { Action, Language, SourceLanguage, type State } from '../types.d'

const initialState: State = {
    sourceLanguage: 'auto',
    targetLanguage: 'es',
    sourceText: '',
    translatedText: '',
    loading: false,
  }
  
  function reducer(state: State, action: Action) {
    const { type } = action
  
    if (type === 'INTERCHANGE_LANGUAGES') {
      return {
        ...state,
        sourceLanguage: state.targetLanguage,
        targetLanguage: state.sourceLanguage,
      }
    }
  
    if (type === 'SET_SOURCE_LANGUAGE') {
      return {
        ...state,
        sourceLanguage: action.payload
      }
    }
  
    if (type === 'SET_TARGET_LANGUAGE') {
      return {
        ...state,
        targetLanguage: action.payload
      }
    }
  
    if (type === 'SET_SOURCE_TEXT') {
      return {
        ...state,
        loading: true,
        sourceText: action.payload,
        translatedText: ''
      }
    }
  
    if (type === 'SET_TRANSLATED_TEXT') {
      return {
        ...state,
        loading: false,
        translatedText: action.payload
      }
    }
  
    return state
  }

  export function useStore () {
    const [{
      sourceLanguage,
      targetLanguage,
      sourceText,
      translatedText,
      loading
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
      dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }

    const setSourceLanguage = (payload: SourceLanguage) => {
      dispatch({ type: 'SET_SOURCE_LANGUAGE', payload })
    }

    const setTargetLanguage = (payload: Language) => {
      dispatch({ type: 'SET_TARGET_LANGUAGE', payload })
    }

    const setSourceText = (payload: string) => {
      dispatch({ type: 'SET_SOURCE_TEXT', payload})
    }
    const setTranslatedText = (payload: string) => {
      dispatch({ type: 'SET_TRANSLATED_TEXT', payload })
    }

    return {
      sourceLanguage,
      targetLanguage,
      sourceText,
      translatedText,
      loading,
      interchangeLanguages,
      setSourceLanguage,
      setTargetLanguage,
      setSourceText,
      setTranslatedText
    }
  }