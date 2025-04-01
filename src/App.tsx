import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { Action, type State } from './types.d'

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

function App() {
  const [{
    sourceLanguage,
    targetLanguage,
    sourceText,
    translatedText,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  console.log('sourceLanguage', sourceLanguage)
  return (
    <div className='App'>
      <h1>Google Tanslate by Tibecvp</h1>
      <button onClick={() => {
        dispatch({ type: 'SET_SOURCE_LANGUAGE', payload: 'en' })
      }}>Set source language to English</button>
      {sourceLanguage}
    </div>
  )
}

export default App
