import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import binarySearch from "../utils/binarySearch";
import RenderArray from "../components/RenderArray";

function BinarySearch() {
    const setName = useOutletContext();
    const arr = useMemo(() => [1, 3, 7, 9, 14, 18, 27, 36], []);

    useEffect(() => {
        setName("Binary Search");
    }, [setName]);

    const history = useMemo(() => {
        return binarySearch(arr, 2);
    }, [arr]);

    return history.map((iteration, index) => {
        return (
            <RenderArray
                key={index}
                {...iteration}
                items={arr}
                last={index === history.length - 1}
            />
        );
    });
}
export default BinarySearch;
