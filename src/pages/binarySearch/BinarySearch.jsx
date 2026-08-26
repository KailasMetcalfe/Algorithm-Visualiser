import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./binarySearch.module.css";
import binarySearch from "./binarySearchAlg";
import RenderArray from "../../components/array/RenderArray";
import { randomSortedArray } from "../../utils/randomiseArray";
import codeSnippets from "./binarySearchSnippets";

const DEFAULT_SEARCH = {
    array: [1, 3, 7, 9, 14, 18, 27, 36, 45, 46, 89, 102],
    item: 9,
};

function BinarySearch() {
    const { historyIndex, setHistoryIndex, setAlgorithm } = useOutletContext();
    const [search, setSearch] = useState(DEFAULT_SEARCH);

    const history = useMemo(() => {
        const iterations = binarySearch(search.array, search.item);
        let paddedResult = [];
        for (let iteration of iterations.slice(0, -1)) {
            paddedResult.push({ ...iteration, middleP: null });
            paddedResult.push(iteration);
        }
        paddedResult.push(iterations.at(-1));
        return paddedResult;
    }, [search.array, search.item]);

    useEffect(() => {
        function randomiseSearch() {
            const newArr = randomSortedArray(12);
            const historyIndex = Math.floor(
                Math.random() * (newArr.length + 1)
            );
            let newValue = Math.floor(Math.random() * 100);
            if (historyIndex < newArr.length) newValue = newArr[historyIndex];
            else {
                while (newArr.includes(newValue)) {
                    newValue = Math.floor(Math.random() * 100);
                }
            }

            setSearch({ array: newArr, item: newValue });
        }

        setAlgorithm({
            name: "Binary Search",
            codeSnippets: codeSnippets,
            historyLength: history.length,
            randomise: randomiseSearch,
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    return (
        <div className={styles.main}>
            <RenderArray
                {...history[historyIndex]}
                items={search.array}
                last={historyIndex === history.length - 1}
            />
            <span className={styles.searchItem}>
                Search item: <span>{search.item}</span>
            </span>
        </div>
    );
}
export default BinarySearch;
