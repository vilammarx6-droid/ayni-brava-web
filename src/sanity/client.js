import { createClient } from '@sanity/client'
import { useState, useEffect } from 'react'

export const client = createClient({
  projectId: 'ik88lryr',
  dataset: 'production',
  useCdn: true, // true for fast edge caching
  apiVersion: '2024-01-01', 
})

// Custom hook to fetch home data
export function useHomeData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(`*[_type == "home"][0]`)
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching Sanity data:", err)
        setLoading(false)
      })
  }, [])

  return { data, loading }
}
