import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'

import './App.css'
import { ArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
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

  useEffect(() => {
    if (sourceText === '') return

    translate({ sourceLanguage, targetLanguage, sourceText: sourceText })
      .then(result => {
        if (result == null) return
        setTranslatedText(result)
      })
      .catch(() => {
        setTranslatedText('Error')
      })
  }, [sourceText, sourceLanguage, targetLanguage])

  return (
    <Container fluid>
      <h2>Google Tanslate by Tibecvp</h2>

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
            <TextArea
              loading={loading}
              type={SectionType.Target}
              value={translatedText}
              onChange={setTranslatedText}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
