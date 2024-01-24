import { QrCode } from 'lucide-react'

export default function Header(): JSX.Element {
  return (
    <header className="absolute top-0 flex h-16 w-full flex-row items-center justify-center bg-zinc-900 px-3 py-2">
      <QrCode size={32} />
    </header>
  )
}
