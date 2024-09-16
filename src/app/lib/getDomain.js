export default function getDomain() {
  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http" : "https";

    return `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
