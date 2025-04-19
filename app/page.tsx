import ShortenForm from "@/components/ShortenForm";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <header>
        <h1 className="font-bold text-center text-blue-500 text-6xl">URL Shortener</h1>
        <p className="text-blue-500 text-lg">
          Shorten your long URLs into compact, shareable links
        </p>
      </header>
      <ShortenForm />
    </div>
  );
}


