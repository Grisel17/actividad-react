import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert("El valor máximo es 10")
      setCount(10)
    }

    if (count < 0) {
      setCount(0)
    }
  }, [count])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Contador</h1>
          <p>Contador con límite de 0 a 10</p>
        </div>

        <h2>{count}</h2>

        <button
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>

        <button
          className="counter"
          onClick={() => setCount(count - 1)}
        >
          Decrementar
        </button>
      </section>
    </>
  )
}

export default App
