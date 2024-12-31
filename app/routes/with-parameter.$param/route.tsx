import React from 'react';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    let realParam = params['param'];
    if (params['param'] !== 'TheBestParam') {
        return 'Bro thats the wrong parameter what the hell';
    }
    return 'Good job, thats the right parameter!';
};

const Withparameterparam = () => {
    const params = useLoaderData<typeof loader>();
    return (
        <div>
            <div>param: {params}</div>
        </div>
    );
};

export default Withparameterparam;
