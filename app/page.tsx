import ShortenForm from "@/components/ShortenForm";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <header className="mb-6">
        <h1 className="font-bold text-4xl text-center">URL Shortener</h1>
        <p className="text-neutral-500">
          Shorten your long URLs into compact, shareable links
        </p>
      </header>
      <ShortenForm />
    </div>
  );
}


