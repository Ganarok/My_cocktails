import Image from 'next/image'

import CocktailCarousel from '@/components/Cocktail/CocktailCarousel'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

interface CocktailProps {
    name: string
    description: string
    images: string[]
    footer?: string
}

export default function Cocktail({
    name,
    description,
    images,
    footer
}: CocktailProps) {
    return (
        <Card className="relative">
            <div className="absolute top-0 left-0 w-12 h-12 opacity-80">
                <Image
                    alt="Image cocktail"
                    className="object-contain"
                    fill
                    sizes="90vw"
                    src="/cocktail_icon.png"
                />
            </div>

            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>

            <CardContent>
                <CocktailCarousel
                    cocktailImages={images}
                    photosDescription={name}
                />
                <CardDescription>{description}</CardDescription>
            </CardContent>

            {footer && (
                <CardFooter className="text-justify">
                    <p>{footer}</p>
                </CardFooter>
            )}
        </Card>
    )
}
