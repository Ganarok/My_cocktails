export interface CocktailCarouselProps {
    photosDescription: string
    cocktailImages: string[]
}

export type Cocktail = {
    name: string
    description: string
    images: string[]
    footer?: string
}
