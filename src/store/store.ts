//conexion a la api 

import { create } from "zustand"
import type { stateStore } from "../types"
import axios from "axios"

export const userStore = create<stateStore>((set, get) => ({
    //estado inicial
    entrada: '',
    resultado: [],

    //obtener datos

    obtenerData: async () => {
        const { entrada } = get()

        try {

            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: entrada, per_page: 9 },
                headers: { Authorization: `Client-ID 6J1hwHn-fSvEVqKwcXwqU2TzlMTRMrW_IrvD8y6zVKg` }
            })

            set({
                resultado: response.data.results
            })

            console.log('que info llega de la api', response);


        } catch (error) {
            console.error('error al obtener los datos de la api', error)
            set({ resultado: [] })
        }


    }




}))

