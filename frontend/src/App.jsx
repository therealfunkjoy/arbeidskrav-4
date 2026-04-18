import './App.css'
import Header from './Components/Header'
import JuliaProfile from './components/JuliaProfile.jsx'

function App() {

  return (
    // Lagt til komponentene på forsiden slik at jeg kan se det mens jeg jobber
    // REMEMBER: burde endres på senere
    <section>
      <Header />
      <main>
        <JuliaProfile />
      </main>
    </section>
  )
}

export default App
