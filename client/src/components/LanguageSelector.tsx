import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { Language, SectionType, SourceLanguage } from '../types.d'

type Props =
    | { type: SectionType.Source, value: SourceLanguage, onChange: (language: SourceLanguage) => void }
    | { type: SectionType.Target, value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-label='Select language' onChange={handleChange} value={value}>
            {type === SectionType.Source && <option value={AUTO_LANGUAGE}>Detect language</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}