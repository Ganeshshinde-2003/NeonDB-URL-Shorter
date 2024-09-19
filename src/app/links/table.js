// import { getMinLinks } from "../lib/db";

// export default async function LinksHTMLTable() {
//   const links = await getMinLinks();
//   return <div className="text-white">{links && JSON.stringify(links)}</div>;
// }

"use client";

import useSWR from "swr";
import LinkCreateForm from "./createForm";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LinksHTMLTable() {
  const endpoint = "/api/links";
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const didSumit = (newItem) => {
    mutate();
  }
  return (
    <div className="text-white">
      <LinkCreateForm didSumit={didSumit} />
      {data && data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className="bg-slate-900 py-2 px-4 rounded-md">URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((link) => (
              <tr key={link.id} className="border border-white">
                <td className="border border-l-white">{link.id}</td>
                <td className="p-2">{link.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No links available</div>
      )}
    </div>
  );
}
