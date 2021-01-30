export interface IPokemonsDTO {
  tipo: string
  treinador: string
  nivel: number
}

export interface IPlayGame {
  id: string
  kind?: string
  coach?: string
  level: number
}

export interface IGameWinner {
  vencedor: {
    id?: string 
    tipo?: string 
    treinador?: string 
    nivel?: number 
  }
}

export interface IGameLoser {
  perdedor: {
    id?: string 
    tipo?: string
    treinador?: string
    nivel?: number
  }
}
