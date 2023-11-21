
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getWine } from "~/data/wines.server";

export const loader: LoaderFunction = async ({ params, request, context, }:LoaderFunctionArgs) => {
    const wineId = params.id;
    const wine = wineId ? await getWine(wineId) : undefined;
    return wine;
}


export default function winefinder()
{
    const myData = useLoaderData<typeof loader>();

    return (<>WineFinder {myData.ok}</>)
}