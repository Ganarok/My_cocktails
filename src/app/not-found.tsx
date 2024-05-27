import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex flex-col gap-8 text-center px-4 items-center justify-center h-screen">
            <h1>Page non trouvée</h1>

            <Link href="/">
                <Button>Retour à l&lsquo;accueil</Button>
            </Link>
        </div>
    )
}
