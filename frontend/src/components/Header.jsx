
import '../style/header.css'

export default function Header() {
    return (
        <header>
            {/* Byttet ut Link med a-element siden navigasjonen kun skjer på en side. 
            Link kan brukes senere dersom vi utvider nettsiden med flere sider.
            Jeg beholder kilen for "hvordan style et Link element med css", siden det var min tidligere løsning. Kilde i dokumentet: Kilder_Julia.txt*/}
            <h1><a href="#header">Gruppe 22</a></h1>

            <nav>
                <ul>
                    <li>
                        {/* a-element brukes for å kunne navigere til en spesefikk seksjon på samme siden. Jeg bruker en ankerlenke (#id). 
                        Kilde i dokumentet: Kilder_Julia.txt*/}
                        <a href="#member">Gruppemedelemmer</a>
                    </li>
                    <li>
                        <a href="#work-requirements">Arbeidskrav</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}