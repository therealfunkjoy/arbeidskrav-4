import { useEffect, useState } from 'react'
import client from '../helpers/client'
import '../style/arbeidskrav.css'

export default function Arbeidskrav() {
  const [sanityArbeidskrav, setSanityArbeidskrav] = useState(null)

  useEffect(() => {
    async function fetchAllArbeidskrav() {
      const allArbeidskrav = await client.fetch(
        "*[_type == 'arbeidskrav'] | order(number asc){_id, number, title, description}"
      )
      setSanityArbeidskrav(allArbeidskrav)
    }

    fetchAllArbeidskrav()
  }, [])

  console.log(sanityArbeidskrav)

  return (
    <section id="work-requirements">
      <h2>Arbeidskrav</h2>

      {sanityArbeidskrav?.map((krav) => (
        <article className="work-card" key={krav._id}>
          <h3>
            {krav.number}. {krav.title}
          </h3>
          <p>{krav.description}</p>
        </article>
      ))}
    </section>
  )
}