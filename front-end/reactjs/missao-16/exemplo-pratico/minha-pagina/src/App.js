import './App.css'

function App() {
  return (
    <div className="container">
        <header>
          <div className="limitador-largura">
            <p>React JS</p>
          </div>
        </header>
        <main>
          <section className="container-link">
            <h1>React JS</h1>
            <p>Biblioteca JavaScript para criar SPAs</p>
            <a href='https://reactjs.org/' target='_blank'>Site Oficial</a>
          </section>
          <section className="container-requisitos">
            <h2>Requisitos</h2>
            <p>Veja abaixo os requisitos mínimos para aprender React JS.</p>
            <div className="container-cards">
              <div className="card">
                <h3>HTML</h3>
                <p>Aprender a estruturar os elementos das páginas com HTML</p>
              </div>
              <div className="card">
                <h3>CSS</h3>
                <p>Aprender a estilizar os elementos da página com CSS</p>
              </div>
              <div className="card">
                <h3>JavaScript</h3>
                <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>Curso de introdução de React JS</p>
        </footer>
    </div>
  )
}

export default App