import { useForm } from "react-hook-form"
import { BusquedaIcon } from "./BusquedaIcon"

interface Datosform {
  consulta: string
}

const Formulario = () => {
  //info para react forms
  const {
    register: register,

    formState: { errors }

  } = useForm<Datosform>()

  return (
    <>
      <div className="flex flex-col items-center">
        <form action="">
          <div className="relative">
            <input type="text"
              placeholder="Buscar Imagenes ..."
              className="w-96 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              {...register('consulta', { required: 'bedes incluir una descripciom de la imagem que quieres buscar' })}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-3 focus:outline-none cursor-pointer"
            >
              <BusquedaIcon />
            </button>
            
            {errors.consulta && (
              <p>{errors.consulta.message}</p>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default Formulario