import { LucideMapPinOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ErrorPage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <LucideMapPinOff size={62} />
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <Link
        to="/"
        className="bg-primary/80 hover:bg-primary mt-12 rounded px-6 py-2 text-lg duration-300"
      >
        Voltar
      </Link>
    </main>
  )
}
