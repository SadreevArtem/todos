import './App.css'
import { Counter } from './components/Counter/Counter'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <div className="container py-5">
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
      <Counter />
    </div>
  )
}

export default App
