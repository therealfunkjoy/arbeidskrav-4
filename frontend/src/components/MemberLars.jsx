import '../style/MemberLars.css' // Importerer CSS for MemberLars komponenten
import larsAvatar from '../assets/larsavatar.webp' // Importerer avatarbildet som brukes i komponenten

// Komponent som viser et profilkort for Lars
export default function MemberLars() {

  // Returnerer et profilkort med bilde, navn, studie og e-post
  return (
    <article className="member-card">

      {/* Profilbilde med alt-tekst for tilgjengelighet */}
      <img
        className="member-card__image"
        src={larsAvatar}
        alt="Illustrasjon av Lars"
      />

      <h2 className="member-card__name">Lars</h2> {/* Navn på medlemmet */}

      <p className="member-card__study">Bachelor i informasjonssystemer</p> {/* Studieretning */}

      <a className="member-card__email" href="mailto:larserek@hiof.no"> {/* E-post som en mailto-lenke */}
        larserek@hiof.no
      </a>
    </article>
  )
}