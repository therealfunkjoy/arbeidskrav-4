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
        <JuliaProfile />
        <MemberLars />
        <Arbeidskrav />
      </main>
    </section>
  )
}

export default App