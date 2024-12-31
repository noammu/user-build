
import React from 'react';
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    return { params };
};

const Alsoparammyparam = () => {
    const { params } = useLoaderData<typeof loader>();
    return <div>
        <div>myparam: {params["myparam"]}</div>
        </div>;
};

export default Alsoparammyparam;
  
        