import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-primary-foreground p-6">
            <div className="flex justify-between">
                <Link href="https://github.com/Ganarok">Ganarok</Link>
                <p>© 2024 - Fait avec {'<3'}</p>
            </div>
        </footer>
    )
}
