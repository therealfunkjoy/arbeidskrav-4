import '../style/MemberLars.css'
import larsAvatar from '../assets/larsavatar.webp'

export default function GruppekomponentLars() {
  return (
    <article className="member-card">
      <img
        className="member-card__image"
        src={larsAvatar}
        alt="Illustrasjon av Lars"
      />

      <h2 className="member-card__name">Lars</h2>

      <p className="member-card__study">Bachelor i informasjonssystemer</p>

      <a className="member-card__email" href="mailto:larserek@hiof.no">
        larserek@hiof.no
      </a>
    </article>
  )
}