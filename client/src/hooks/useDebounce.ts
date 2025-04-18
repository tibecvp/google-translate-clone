import { useEffect, useState } from "react"

export function useDebounce<T> (value: T, delay = 500) {
    const [debauncedValue, setDebauncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebauncedValue(value)
        }, delay)

        return () => clearTimeout(timer)
    }, [value, delay])

    return debauncedValue
}