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

        <section className='profile-section' id="#member">
          <JuliaProfile />
          <MemberLars />
        </section>

        <Arbeidskrav />
      </main>
    </section>
  )
}

export default App