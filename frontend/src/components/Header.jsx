
import '../Style/header.css'

export default function Header() {
    return (
        <header>
            {/* Logoen er pakket inn i et Link-komponent slik at man kan trykke på Logoen for å navigere til toppen av siden */}
            <h1><Link to="/">Gruppe 22</Link></h1>

            <nav>
                <ul>
                    <li>
                        {/* a-element brukes for å kunne navigere til en spesefikk seksjon på samme siden. Jeg bruker en ankerlenke (#id). 
                        Kilde i dokumentet: Kilder_Julia.txt*/}
                        <a href="#member-one">Gruppemedelemmer</a>
                    </li>
                    <li>
                        <a href="#work-requirements">Arbeidskrav</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}