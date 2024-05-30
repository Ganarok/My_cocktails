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
            'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0ae13989-ba2d-4e9f-966d-6092e8dafa81/Derivates/c8ddaa02-d41d-4aff-97ad-8846c055b6e1.jpg',
            'https://www.liquor.com/thmb/sKLXvxC4kfdMTPvlfjpV4C5LZ_8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Sex-on-the-Beach-1500x1500-hero-f691313bad084cb88bcc2da9286dedab.jpg'
        ],
        footer: 'Je peux faire une version sans alcool, juste avec jus de fruits. Précisez bien ce que vous souhaitez !'
    },
    {
        name: 'Gin Basil Smash',
        description:
            'Un cocktail à base de gin, citron/citron vert, sirop de sucre et feuilles de basilic.',
        images: [
            'https://assets-global.website-files.com/603e7f3219462c686bd2bb29/606c5e0d8bb385f1016fd0f2_gin-basil-smash-main.jpeg',
            'https://www.valour-lemaire.com/wp-content/uploads/2020/08/Gin-Basil-Smash.png'
        ],
        footer: "Je connais moins celui-ci j'avais trop envie de le tester. Je peux faire une version sans alcool, juste avec jus de citron vert et basilic."
    },
    {
        name: 'Mojito',
        description:
            'Un cocktail à base de rhum, citron vert, menthe, sucre et eau gazeuse.',
        images: [
            'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg',
            'https://mesdelicieusescreations.com/wp-content/uploads/2022/07/mojito-3-saveurs.jpg'
        ],
        footer: 'Variante possible avec de la crème de framboise, ou avec de la vodka à la place du rhum'
    },
    {
        name: 'Caïpiroska',
        description:
            'Un cocktail simple et efficace à base de vodka, citron vert et sucre.',
        images: [
            'https://www.spoonforkbacon.com/wp-content/uploads/2022/08/kiwi-caipiroska-recipe-card.jpg',
            'https://egl-assets.scene7.com/is/image/endeavour/20220411_C_IN%20ARTICLE%2001_Caipiroska?$dans-daily-web-image$&wid=1400'
        ],
        footer: 'Cocktail très simple et efficace ! Normalement pas de variante, mais tout est possible.'
    },
    {
        name: 'Blue Gin',
        description:
            'Un cocktail à base de gin, curaçao bleu et jus de citron vert.',
        images: [
            'https://happy-drinks.de/media/image/2b/6a/00/Blue-Gin-Blues-CocktailwxWG0ba5NnTGc_800x800.jpg',
            'https://cf.ltkcdn.net/cocktails/images/orig/269828-2127x1409-blue-corasao.jpg'
        ],
        footer: 'On peut également rajouter un peu de sirop de sucre pour adoucir le tout.'
    }
]
