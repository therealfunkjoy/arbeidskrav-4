/* Jeg var usikker på hva komponentet burde hete og spurte ChatGPT om innspill: 
https://chatgpt.com/share/69e308fc-8670-8329-9ecc-4c21da0b1383 (Kilde også lagt til i dokumentet: Kilder_Julia.jsx)

ChatGPT foreslo at vi skulle ha et felles komponent "MemberProfile.jsx", og kun ulik css for hvert gruppemedelem. 
Det blir ikke helt riktig i dette prosjektet, siden hver gruppemdelem skal lage hvert sitt komponent.
Da kan vi ha den strukturen vi ønsker på profilkortene.

Jeg har derfor valgt å bytte navnet på komponentet til: "JuliaProfile.jsx"
*/

import MemberAvatar from '../assets/MemberAvatarJulia.png'
import '../Style/julia-profile.css'

export default function JuliaProfile() {
    return (
        <section className='member-section-julia'>
            {/* Kilde for "Legge til bilde i html" i dokumentet: Kilder_Julia.txt */}
            <img src={MemberAvatar} id='avatar-img-julia' />

            <section id='member-container-julia'>
                <h3>Julia Pauline Telle</h3>

                {/* Kilde for "Legge til mail link" i dokumentet: Kilder_Julia.txt */}
                <p><a href='mailto:juliapt@hiof.no'>juliapt@hiof.no</a></p>
                <p>Årsstudium i informasjonsteknologi</p>
            </section>

        </section>
    )
}