import { userStore } from "../store/store"
import type { Fotos } from "../types"

const Resultado = () => {

  //tipo desestructuracion

  const resultados = userStore((state) => state.resultado)


  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {resultados && resultados.length > 0 ? (
          resultados.map((foto: Fotos) => (
            <div key={foto.id}>
              <div className="rounded overflow-hidden shadow-lg bg-amber-100">
                <img className="w-full" src={foto.urls.small} alt={foto.alt_description} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2.5">{foto.user.name} {foto.user.last_name}</div>
                <p className="text-gray-700 text-base">{foto.description || foto.alt_description || "sin descripcion"}</p>
              </div>
            </div>
          ))
        ) : (<><p className="text-center col-span-4 text-gray-400 text-xl">No se han encontraron resultados</p></>)}
      </div>
    </div>
  )
}

export default Resultado