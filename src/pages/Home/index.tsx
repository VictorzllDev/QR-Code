import { useSearchParams } from 'react-router-dom'

export default function Home(): JSX.Element {
  let [searchParams, setSearchParams] = useSearchParams()
  let url: string | null = searchParams.get('url')

  return (
    <main className="flex min-h-screen items-center justify-center pt-16">
      <form className="space-y-4 rounded-lg bg-secondary p-4 shadow-2xl shadow-zinc-900/40">
        <input
          type="text"
          placeholder="https://google.com"
          value={url ?? ''}
          onChange={(e) => setSearchParams({ url: e.target.value })}
          className="h-14 w-full rounded border-2 px-3 text-black outline-none duration-300 focus:border-2 focus:border-blue-400"
        />
        {url ? (
          <img
            src={
              url
                ? `https://chart.googleapis.com/chart?chs=300x300&chld=|2&cht=qr&chl=${url}`
                : ''
            }
            className="w-72 rounded object-cover object-center"
          />
        ) : (
          ''
        )}
      </form>
    </main>
  )
}
