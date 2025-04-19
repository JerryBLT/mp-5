"use client";
import { useState, useEffect } from "react";
import Shortener from "@/lib/Shortener";
import Link from "next/link";

export default function ShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [baseUrl, setBaseUrl] = useState("");

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        setLoading(true);
        setError("");
        setShortUrl("");

        const result = await Shortener(url, alias)
        if(result.error){
            setError(result.error);
        } else{
            setShortUrl(`${window.location.origin}/${alias}`);
        }
        setLoading(false);
    }


    return (
        <div className="bg-white p-15 rounded-4xl border-2 w-[50%]">
            <header className="mb-6">
                <h1 className="font-bold text-2xl">Shorten a URL</h1>
                <p>
                    Enter a long URL to create a shorter, shareable link
                </p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="url" className="text-lg">URL</label>
                    <div>
                        <input
                            placeholder="https://example.com/very/long/url"
                            name="url"
                            type="url"
                            className="w-[90%] border px-3 py-2 rounded-md"
                            required
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                            
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="alias" className="text-lg">Custom Alias</label>
                    <div className="flex gap-2 items-center">
                        <p className="text-neutral-500 whitespace-nowrap"> {baseUrl}/ </p>
                        <input
                            placeholder="your-custom-alias"
                            name="alias"
                            type="text"
                            className=" w-[30%] border px-3 py-2 rounded-md"
                            required
                            value={alias}
                            onChange={e => setAlias(e.target.value)}

                        />
                    </div>
                </div>
                
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white bg-blue-500 hover:bg-blue-400 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
                >
                    {loading ? "Shortening..." : "Shorten"}
                    
                </button>
                {error && (
                    <div>
                        {error}
                    </div>
                )}
            </form>

            {shortUrl && (
                <div className="mt-6 p-4 rounded-lg border">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-medium text-slate-500">
                        Your shortened URL:
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href={shortUrl}
                                target="_blank"
                                className="text-primary font-medium hover:underline break-all"
                            >
                                {shortUrl}
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
