import { createClient } from '@sanity/client' // Importerer funksjonen for å opprette en Sanity klient

// Oppretter kobling til Sanity-prosjektet slik at frontend kan hente innhold fra Sanity
const client = createClient({
  projectId: '438wg5ao', // Unikt ID for Sanity-prosjektet
  dataset: 'production', // Dataset som brukes, vanligvis 'production' for live data
  useCdn: true, // Bruker Sanity CDN for raskere innlasting av data
  apiVersion: '2026-04-19', // API-versjon som brukes
})

export default client //Eksporterer client slik at den kan importeres i andre filer