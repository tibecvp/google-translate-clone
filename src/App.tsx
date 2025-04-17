import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useDebounce } from './hooks/useDebounce'

import './App.css'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'

function App() {
  const {
    loading,
    sourceLanguage,
    sourceText,
    targetLanguage,
    translatedText,
    interchangeLanguages,
    setSourceLanguage,
    setTargetLanguage,
    setSourceText,
    setTranslatedText
  } = useStore()


  const debouncedSourceText = useDebounce(sourceText)

  useEffect(() => {
    if (debouncedSourceText === '') return

    translate({ sourceLanguage, targetLanguage, sourceText: debouncedSourceText })
      .then(result => {
        if (result == null) return
        setTranslatedText(result)
      })
      .catch(() => {
        setTranslatedText('Error')
      })
  }, [debouncedSourceText, sourceLanguage, targetLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(translatedText)
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(translatedText)
    utterance.lang = VOICE_FOR_LANGUAGE[targetLanguage]
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h2>Tibecvp Tanslator</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.Source}
              value={sourceLanguage}
              onChange={setSourceLanguage}
            />
            <TextArea
              type={SectionType.Source}
              value={sourceText}
              onChange={setSourceText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={sourceLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.Target}
              value={targetLanguage}
              onChange={setTargetLanguage}
            />
            <div style={{ position: 'relative' }}>
              <TextArea
                loading={loading}
                type={SectionType.Target}
                value={translatedText}
                onChange={setTranslatedText}
              />
              <div
                style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}
              >
                <Button
                  variant='link'
                  onClick={handleClipboard}>
                  <ClipboardIcon />
                </Button>
                <Button
                  variant='link'
                  onClick={handleSpeak}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>

      <p className='disclaimer'>Google Translate clone for learning purposes.</p>
    </Container>
  )
}

export default App
