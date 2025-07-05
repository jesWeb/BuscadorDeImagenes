import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-200 p-4.5">
          <h1 className="text-center text-3xl font-bold text-gray-800">Buscador de Imagenes</h1>
        </header>
        <main className="flex flex-col flex-grow">
          <section className="bg-blue-100 p-4">
            <Formulario />
          </section>
          <section className="bg-blue-50 p-4 flex-grow">
            <Resultado />
          </section>
        </main>

        <footer className="bg-blue-200 p-4  text-center">
          <p>Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default App
