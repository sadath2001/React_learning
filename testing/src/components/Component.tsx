import React, { useCallback, useEffect, useMemo } from "react"
import Data from "../data/comments.json"
interface values {
    postId: number;
    id: number
    name: string;
    email: string;
    body: string;
}
const getLength = (arr: values[]) => {
    console.log('im loading')
    return arr.length;
};

const Component: React.FC = () => {
    const totalEntries = useMemo(() => getLength(Data), [])
    // useMemo is not to calculate it again

    // event listeners cleanup
    const handleOnWindowLoad = useCallback(() => {
        console.log("Loaded");
    }, [])
    useEffect(() => {
        window.addEventListener('load', handleOnWindowLoad);
        return () => {
            window.removeEventListener("load", handleOnWindowLoad)
        }
    }, [handleOnWindowLoad])
    return (
        <div>
            <h1>React component</h1>
            <h3>The total count:{totalEntries} </h3>

        </div>
    )
}
export default Component;