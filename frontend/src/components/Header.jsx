
import '../Style/header.css'

export default function Header() {
    return (
        <header>
            <h1><Link to="/">Gruppe 22</Link></h1>

            <nav>
                <ul>
                    <li>
                        {/* Søk: href navigate to element on page. 
                        Jeg brukte denne linken for å finne ut hvordan jeg kan hoppe mellom elementer/ seksjoner på samme siden:
                        https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#skip_links*/}
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