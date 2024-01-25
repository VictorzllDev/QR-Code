export default function QRCodeGenerator({ url }: { url: string | null }) {
  return url ? (
    <img
      src={`https://chart.googleapis.com/chart?chs=300x300&chld=|2&cht=qr&chl=${url}`}
      className="w-72 rounded object-cover object-center"
      alt="QR Code"
    />
  ) : null
}
