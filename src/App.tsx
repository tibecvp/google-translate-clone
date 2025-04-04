import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'

function App() {
  const { sourceLanguage, setSourceLanguage } = useStore()
  return (
    <div className='App'>
      <h1>Google Tanslate by Tibecvp</h1>
      <button onClick={() => {
        setSourceLanguage('en')
      }}>Set source language to English</button>
      {sourceLanguage}
    </div>
  )
}

export default App
