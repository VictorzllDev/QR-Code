import { useSearchParams } from 'react-router-dom'
import QRCodeGenerator from '../../components/QRCodeGenerator'

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const url: string | null = searchParams.get('url')

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ url: e.target.value })
  }

  return (
    <main className="flex min-h-screen items-center justify-center pt-16">
      <div className="space-y-4 rounded-lg bg-secondary p-4 shadow-2xl shadow-zinc-900/40">
        <input
          type="text"
          placeholder="https://google.com"
          value={url ?? ''}
          onChange={handleUrlChange}
          className="h-14 w-full rounded border-2 px-3 text-black outline-none duration-300 focus:border-2 focus:border-blue-400"
        />
        <QRCodeGenerator url={url} />
      </div>
    </main>
  )
}

export default Home
