import './App.css'
import Header from './components/Header'
import JuliaProfile from './components/JuliaProfile.jsx'
import MemberLars from './components/MemberLars'
import Arbeidskrav from './components/Arbeidskrav'

// Hovedkomponenten for applikasjonen
function App() {
  return (
    <section>
      <Header />
      <main>

        <section id="#member">
          <JuliaProfile />
          <MemberLars />
        </section>

        <Arbeidskrav />
      </main>

      <footer>Utvikling av interaktive nettsteder 2026</footer>
    </section>
  )
}

export default App