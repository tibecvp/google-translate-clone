import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useDebounce } from './hooks/useDebounce'

import './App.css'
import { ArrowsIcon, ClearIcon, ClipboardIcon, SpeakerIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { Disclaimer } from './components/Disclaimer'
import { Header } from './components/Header'

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

  const handleClearText = () => {
    setSourceText('')
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(translatedText)
  }

  const handleSpeak = (source: SectionType) => {
    const defaultLanguage = sourceLanguage === 'auto' ? 'en' : sourceLanguage
    const language = source === SectionType.Source ? defaultLanguage : targetLanguage
    const textToRead = source === SectionType.Source ? sourceText : translatedText

    const utterance = new SpeechSynthesisUtterance(textToRead)
    utterance.lang = VOICE_FOR_LANGUAGE[language]
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid >
      <Header />

      <Stack gap={2}>
        <Row>
          <Col>
            <LanguageSelector
              type={SectionType.Source}
              value={sourceLanguage}
              onChange={setSourceLanguage}
            />
          </Col>

          <Col
            xs='auto'
            style={{ padding: 0 }}
          >
            <Button
              variant='link'
              disabled={sourceLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}
              style={{
                margin: 0,
                padding: 0
              }}
            >
              <ArrowsIcon />
            </Button>
          </Col>

          <Col>
            <LanguageSelector
              type={SectionType.Target}
              value={targetLanguage}
              onChange={setTargetLanguage}
            />
          </Col>
        </Row>

        <Row xs={1} md={2}>
          <Col style={{ marginBottom: 4 }}>
            <div style={{ position: 'relative' }}>
              <TextArea
                type={SectionType.Source}
                value={sourceText}
                onChange={setSourceText}
              />
              <Button
                variant='link'
                style={{
                  position: 'absolute',
                  right: -4,
                  top: 0,
                  opacity: 0.6,
                  display: (sourceText === '') ? 'none' : 'block'
                }}
                onClick={handleClearText}
              >
                <ClearIcon />
              </Button>
              <Button
                variant='link'
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  opacity: 0.6,
                  display: (sourceText === '') ? 'none' : 'block'
                }}
                onClick={() => handleSpeak(SectionType.Source)}
              >
                <SpeakerIcon />
              </Button>
            </div>
          </Col>
          <Col>
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
                  style={{ opacity: 0.6, display: (translatedText === '') ? 'none' : 'block' }}
                  onClick={handleClipboard}>
                  <ClipboardIcon />
                </Button>
                <Button
                  variant='link'
                  style={{ opacity: 0.6, display: (translatedText === '') ? 'none' : 'block' }}
                  onClick={() => handleSpeak(SectionType.Target)}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Stack>

      <Disclaimer />

    </Container>
  )
}

export default App
