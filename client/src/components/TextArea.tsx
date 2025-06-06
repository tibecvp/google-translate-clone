import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'
import { useEffect, useRef } from 'react'

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string) => void
    value: string
    ref: React.Ref<HTMLTextAreaElement>
}

const commonStyles = { border: '2px #f5f5f5 solid', minHeight: '200px', paddingBottom: 32 }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.Source) return 'Enter text'
    if (loading === true) return 'Loading...'
    return 'Translation'
}

export const TextArea = ({ type, loading, value, onChange, ref }: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const styles = type === SectionType.Source
        ? { ...commonStyles, paddingRight: 30 }
        : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [value])

    return (
        <Form.Control
            ref={ref || textareaRef}
            autoFocus={type === SectionType.Source}
            as='textarea'
            name={`${type}-textarea`}
            disabled={type === SectionType.Target}
            placeholder={getPlaceholder({ type, loading })}
            style={{ ...styles, resize: 'none', overflow: 'hidden' }}
            value={value}
            onChange={handleChange}
        />
    )
}