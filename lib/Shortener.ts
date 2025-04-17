
"use server";
import getCollection, { URLS_COLLECTION } from "@/db";

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default async function Shortener(url: string, alias: string) {
  if (!isValidUrl(url)) {
    return { error: "Invalid URL: Could not verify URL. Please try again." };
  }

  const urlsCollection = await getCollection(URLS_COLLECTION);
  const existing = await urlsCollection.findOne({ alias });

  if (existing) {
    return { error: "Invalid alias: This alias already exists" };
  }

  await urlsCollection.insertOne({ alias, url });
  return {error: null};
}