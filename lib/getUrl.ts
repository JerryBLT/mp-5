import getCollection, { URLS_COLLECTION } from "@/db";

export default async function getUrl(alias: string): Promise<string | null> {
  if(!alias){
    return null;
  }

  const urlsCollection = await getCollection(URLS_COLLECTION);
  const doc = await urlsCollection.findOne({ alias });

  if (!doc) {
    return null;
  }

  return doc.url;
}
