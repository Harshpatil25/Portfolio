import { useEffect, useState } from 'react'

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1900)
    return () => window.clearTimeout(timer)
  }, [])

  return isLoading
}
