import React, { useEffect, useState } from 'react';

export default function Hooky() {
    const [state, setState] = useState(0);
    useEffect(() => {
        const timeout = setInterval(() => {
            setState((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(timeout);
        };
    }, []);
    return <div>look its going up every second! {state}</div>;
}
