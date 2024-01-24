export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center pt-16">
      <form className="bg-secondary space-y-4 rounded-lg p-4 shadow-2xl shadow-zinc-900/40">
        <input
          type="text"
          placeholder="https://google.com"
          className="focus:border-primary h-14 w-full rounded border-2 px-3 text-black outline-none duration-300 focus:border-2"
        />
        <img
          src="/src/assets/killuaLoad.gif"
          className="h-72 w-72 rounded object-cover object-center"
        />
        <button className="bg-primary/80 hover:bg-primary h-14 w-full rounded duration-300">
          Gerar QR-Code
        </button>
      </form>
    </main>
  )
}
