export type Character = {
    name: string
    species: string
    gender: 'Male' | 'Female' | 'unknown'
    id: number
    image: string
    type: string
    status: 'Alive' | 'Dead' | 'unknown'
    episode: Array<string>
    created: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
}