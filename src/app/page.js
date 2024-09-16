import { helloworld } from "./lib/db";

export default async function Home() {
  const dbHello = await helloworld();
  console.log(dbHello);

  return (
    <div>HIIIIIIIIIIIIIIi</div>
  );
}


export const runtime = "edge"
export const preferredRegion = "iad1"