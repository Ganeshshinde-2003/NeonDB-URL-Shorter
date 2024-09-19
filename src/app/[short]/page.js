import { getShortLinkRecord } from "../lib/db";
import NotFound from "../not-found";

export default async function ShortPage ({ params}) {
    const {short} = params;
    const [records] = await getShortLinkRecord(short);
    if(!records) {
        return (
            <NotFound />
        )
    }
    return (
        <div>
            <h1>Short Page</h1>
            <p>{short}</p>
            {
                JSON.stringify(records)
            }
        </div>
    )
}