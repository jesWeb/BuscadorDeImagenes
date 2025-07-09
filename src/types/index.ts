//interface para cada imagem -  foto
export interface Fotos {
    id: string
    urls: {
        small: string,
        thumb: string
    }
    alt_description: string,
    user: {
        name: string
        first_name: string
        last_name: string
        instagram_username: string
        portfolio_url: string
    }
    description?: string
}


//interface para el estado global del store 
export interface stateStore {
    entrada: string
    resultado: Fotos[]
    pagina: number
    totalPaginas: number
    obtenerDatos: () => Promise<void>
    establecerPagina: (numero: number) => void
    establecerEntrada: (busqueda: string) => void
}
