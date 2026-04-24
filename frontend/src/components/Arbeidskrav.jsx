import { useEffect, useState } from 'react' // Importerer React hooks for å håndtere state og sideeffekter
import client from '../helpers/client' // Importerer Sanity klienten for å hente data fra Sanity
import '../style/arbeidskrav.css' // Importerer CSS for Arbeidskrav komponenten

// Komponent som viser arbeidskravene hentet fra Sanity
export default function Arbeidskrav() {
  const [sanityArbeidskrav, setSanityArbeidskrav] = useState(null) // State for å lagre arbeidskravene hentet fra Sanity

  // useEffect kjører når komponenten lastes inn
  useEffect(() => {
    // Asynkron funksjon som henter alle arbeidskrav
    async function fetchAllArbeidskrav() {

      // Henter dokumenttypen arbeidskrav og sorterer etter nummer 
      // Kilde: https://www.sanity.io/docs/content-lake/query-cheat-sheet
      const allArbeidskrav = await client.fetch(
        "*[_type == 'arbeidskrav'] | order(number asc){_id, number, title, description}"
      )
      // Lagrer de hentede arbeidskravene i state
      setSanityArbeidskrav(allArbeidskrav)
    }

    // Kaller funksjonen som henter data fra Sanity
    fetchAllArbeidskrav()
  }, [])


  // Returnerer en seksjon som viser arbeidskrav hentet fra Sanity
  return (
    <section id="work-requirements"> {/* Seksjon for arbeidskrav */}
      <h2>Arbeidskrav</h2> {/* Overskrift for seksjonen */}

      <section className='work-cards-section'>
        {/* map brukes for å vise alle arbeidskrav som egne kort */}
        {sanityArbeidskrav?.map((krav) => (
          <article className="work-card" key={krav._id}> {/* Hver arbeidskrav vises i et eget article element med en unik key */}
            <h3>
              {krav.title} {/* Viser tittelen på arbeidskravet */}
            </h3>
            <p>{krav.description}</p> {/* Viser beskrivelsen av arbeidskravet */}
          </article>
        ))}
      </section>

    </section>
  )
}