import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '438wg5ao',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-04-19',
})

export default client