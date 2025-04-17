import getUrl from "@/lib/getUrl";
import { redirect } from "next/navigation";

export default async function PageRedirect({ params, }: { params: Promise<{alias: string}>; }) {
  const {alias} = await params;

  console.log("alias: ", alias);

  const url = await getUrl(alias);

  if(url){
    redirect(url);
  }
  else if(!url){
    console.log("did not get a URL from the DB");
  }

  redirect("/");
}

