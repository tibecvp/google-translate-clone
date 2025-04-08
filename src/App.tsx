import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button } from 'react-bootstrap'

import './App.css'
import { ArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'

function App() {
  const { sourceLanguage, targetLanguage, interchangeLanguages, setSourceLanguage, setTargetLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google Tanslate by Tibecvp</h1>

      <Row>
        <Col>
          <LanguageSelector
            type='source'
            value={sourceLanguage}
            onChange={setSourceLanguage}
          />
          {sourceLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={sourceLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <LanguageSelector
            type='target'
            value={targetLanguage}
            onChange={setTargetLanguage}
          />
          {targetLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
