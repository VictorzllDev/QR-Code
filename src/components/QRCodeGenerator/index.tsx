export default function QRCodeGenerator({ url }: { url: string | null }) {
  return url ? (
    <img
      src={`https://quickchart.io/qr?format=svg&margin=1&text=${url}`}
      className="w-72 rounded object-cover object-center"
      alt="QR Code"
    />
  ) : null
}
