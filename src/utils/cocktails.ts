import { Cocktail } from '@/types/cocktail'

export const cocktails: Cocktail[] = [
    {
        name: 'White Russian',
        description:
            "Un cocktail à base de vodka, liqueur de café et lait. J'aime suggérer de la vodka black car plus fruitée. Petite mousse de lait fraiche sur le dessus.",
        images: [
            '/cocktails/white-russian.jpg',
            'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/81664_origin-scaled.jpg'
        ],
        footer: 'Je peux faire une variante plus light/gourmande sans vodka, juste avec liqueur de café et lait. Variante sans lactose aussi possible.'
    },
    {
        name: 'Sex On the Beach',
        description:
            "Un cocktail à base de vodka, liqueur de pêche, jus d'orange/jus d'ananas et jus de cranberry.",
        images: [
            '/cocktails/sex-on-the-beach.jpg',
            'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0ae13989-ba2d-4e9f-966d-6092e8dafa81/Derivates/c8ddaa02-d41d-4aff-97ad-8846c055b6e1.jpg'
        ],
        footer: 'Je peux faire une version sans alcool, juste avec jus de fruits. Précisez bien ce que vous souhaitez !'
    },
    {
        name: 'Gin Basil Smash',
        description:
            'Un cocktail à base de gin, citron/citron vert, sirop de sucre et feuilles de basilic.',
        images: [
            'https://assets-global.website-files.com/603e7f3219462c686bd2bb29/606c5e0d8bb385f1016fd0f2_gin-basil-smash-main.jpeg'
        ],
        footer: "Je connais moins celui-ci j'avais trop envie de le tester. Je peux faire une version sans alcool, juste avec jus de citron vert et basilic."
    }
]
