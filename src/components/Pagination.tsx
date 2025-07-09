import { userStore } from "../store/store"

const Pagination = () => {

    const pagina = userStore((state) => state.pagina);
    const totalPaginas = userStore((state) => state.totalPaginas);
    const establecerPagina = userStore((state) => state.establecerPagina);

    const grupoImagenes = 5;
    const grupoActual = Math.floor(pagina - 1 / grupoImagenes);
    console.log('Estoy en el grupo actual', grupoActual);

    const paginaInicio = grupoActual * grupoImagenes + 1;
    console.log('estoy en la pagina de inicio de este grupo', paginaInicio);

    const paginaFin = Math.min(totalPaginas, paginaInicio + grupoImagenes - 1);
    console.log('La pagina final es ', paginaFin);

    const numerosPaginas: number[] = [];

    for (let i = paginaInicio; i <= paginaFin; i++) {
        numerosPaginas.push(i)

    }

    // console.log('arreglo de numero de paginas', numerosPaginas);


    return (
        <>

            <div className="flex justify-center items-center space-x-0 mt-4">
                {/* anterior */}
                <button
                    onClick={() => {
                        if (pagina > 1) {
                            establecerPagina(pagina - 1)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    }}
                    disabled={pagina <= 1}
                    className="px-4 py-2.5  text-white  bg-blue-500 rounded disabled:opacity-45 cursor-pointer">
                    Anterior
                </button>

                {paginaInicio > 1 && (
                    <button
                        className="px-2 py-1 bg-gray-300 text-black rounded cursor-pointer"
                        onClick={() => {
                            const nuevaPagina = paginaInicio - 1
                            establecerPagina(nuevaPagina)
                            window.scrollTo({ top: 0, behavior: 'smooth' })

                        }}
                    >
                        &laquo;
                    </button>
                )}


                {numerosPaginas.map((num) => (
                    <button
                        key={num}
                        onClick={() => { establecerPagina(num), window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                        className={`px-3 py-1 rounded ml-2 mr-2 cursor-pointer ${num === pagina ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    >
                        {num}
                    </button>
                ))}



                {paginaFin < totalPaginas && (
                    <button
                        className="px-2 py-1 bg-gray-300 text-black rounded cursor-pointer"
                        onClick={() => {
                            const nuevaPaginaFin = paginaFin + 1
                            establecerPagina(nuevaPaginaFin)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        &raquo;
                    </button>
                )}


                {/* posterior */}
                <button
                    onClick={() => {
                        if (pagina < totalPaginas) {
                            establecerPagina(pagina + 1)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    }}
                    disabled={pagina >= totalPaginas}
                    className="px-4 py-2.5  text-white ml-3 bg-blue-500 rounded disabled:opacity-45 cursor-pointer">Siguiente</button>
            </div>
        </>
    )
}

export default Pagination