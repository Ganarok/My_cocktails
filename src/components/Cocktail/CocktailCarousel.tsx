'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import { CocktailCarouselProps } from '@/types/cocktail'

export default function CocktailCarousel({
    cocktailImages
}: CocktailCarouselProps) {
    return (
        <Carousel
            className="mx-8"
            plugins={[
                Autoplay({
                    delay: 3000
                })
            ]}
        >
            <CarouselContent>
                {cocktailImages.map((url: string, index: number) => (
                    <CarouselItem
                        className="relative w-full h-full min-h-72 my-4"
                        key={index}
                    >
                        <Image
                            alt="Image cocktail"
                            className="object-cover sm:object-contain"
                            fill
                            sizes="90vw"
                            src={url}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
