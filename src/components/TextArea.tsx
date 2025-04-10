import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = { border: '2px #f5f5f5 solid', height: '200px' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.Source) return 'Enter text'
    if (loading === true) return 'Loading...'
    return 'Translation'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
    const styles = type === SectionType.Source
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
            autoFocus={type === SectionType.Source}
            as='textarea'
            disabled={type === SectionType.Target}
            placeholder={getPlaceholder({ type, loading })}
            style={{ ...styles, resize: 'none' }}
            value={value}
            onChange={handleChange}
        />
    )
}