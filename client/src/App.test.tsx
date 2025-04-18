import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My App works as expected', async () => {
    const user = userEvent.setup()
    const app = render(<App />)

    const textareaSource = app.getByPlaceholderText('Enter text')

    await user.type(textareaSource, 'Hello world')
    const result = await app.findByDisplayValue(/Hola mundo/i, {}, { timeout: 2000 })

    expect(result).toBeTruthy()
})