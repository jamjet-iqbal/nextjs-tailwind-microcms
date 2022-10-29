import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'jamjet-iqbal',
  apiKey: process.env.API_KEY || '',
})
