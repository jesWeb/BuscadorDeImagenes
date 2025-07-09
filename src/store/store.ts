//conexion a la api 

import { create } from "zustand"
import type { stateStore } from "../types"
import axios from "axios"

export const userStore = create<stateStore>((set, get) => ({
    //estado inicial
    entrada: '',
    resultado: [],
    pagina: 1,
    totalPaginas: 0,
    //obtener datos

    obtenerDatos: async () => {
        const { entrada, pagina } = get()

        try {

            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: entrada, pagina: pagina, per_page: 10 },
                headers: { Authorization: `Client-ID 6J1hwHn-fSvEVqKwcXwqU2TzlMTRMrW_IrvD8y6zVKg` }
            })

            set({
                resultado: response.data.results,
                totalPaginas: response.data.total_pages
            })

            console.log('que info llega de la api', response, 'estamos en la pagina', pagina)


        } catch (error) {
            console.error('error al obtener los datos de la api', error)
            set({ resultado: [] })
        }


    },

    establecerPagina: (numero: number) => {
        set({ pagina: numero })
        get().obtenerDatos()
    },

    establecerEntrada: (busqueda: string) => {
        set({
            entrada: busqueda,
            pagina: 1
        })
    }
}))

