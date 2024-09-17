import { getMinLinks } from "../lib/db";

export default async function LinksHTMLTable() {
  const links = await getMinLinks();
  return <div className="text-white">{links && JSON.stringify(links)}</div>;
}
