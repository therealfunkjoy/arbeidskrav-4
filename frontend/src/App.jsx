import './App.css' // Importerer global CSS for App komponenten
import MemberLars from './components/MemberLars' // Importerer komponent som viser profilkortet til Lars
import Arbeidskrav from './components/Arbeidskrav' // Importerer komponent som viser arbeidskravene fra Sanity

// Hovedkomponenten for applikasjonen
function App() {
  return (
    <main>
      <MemberLars /> {/* Viser profilkortet til Lars */}
      <Arbeidskrav /> {/* Viser listen over arbeidskrav hentet fra Sanity */}
    </main>
  )
}

export default App // Eksporterer App slik at den kan brukes i main.jsx