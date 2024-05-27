import Cocktail from "@/components/Cocktail/Cocktail"
import { cocktails } from "@/utils/cocktails"

export default async function Home() {
    return (
        <div className="flex flex-col gap-8 text-center p-4 items-center justify-center min-h-screen">
            <h1>Liste des cocktails</h1>

            {cocktails.map((c, i) =>
                <Cocktail
                    description={c.description}
                    footer={c.footer}
                    images={c.images}
                    key={i}
                    name={c.name}
                />
            )}
        </div>
    )
}
