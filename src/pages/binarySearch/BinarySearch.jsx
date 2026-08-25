import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./binarySearch.module.css";
import binarySearch from "./binarySearchAlg";
import RenderArray from "../../components/RenderArray";
import CodeBlock from "../../components/CodeBlock";
import { randomSortedArray } from "../../utils/randomiseArray";
import codeArray from "./binarySearchSnippets";

const DEFAULT_SEARCH = {
    array: [1, 3, 7, 9, 14, 18, 27, 36, 45, 46, 89, 102],
    item: 9,
};

function BinarySearch() {
    const setName = useOutletContext();
    const [index, setIndex] = useState(0);
    const [search, setSearch] = useState(DEFAULT_SEARCH);

    const history = useMemo(() => {
        return binarySearch(search.array, search.item);
    }, [search.array, search.item]);

    useEffect(() => {
        setName("Binary Search");
    }, [setName]);

    function randomiseSearch() {
        const newArr = randomSortedArray(10);
        const index = Math.floor(Math.random() * (newArr.length + 1));
        let newValue = Math.floor(Math.random() * 100);
        if (index < newArr.length) newValue = newArr[index];
        else {
            while (newArr.includes(newValue)) {
                newValue = Math.floor(Math.random() * 100);
            }
        }

        setSearch({ array: newArr, item: newValue });
        setIndex(0);
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <RenderArray
                    {...history[index]}
                    items={search.array}
                    last={index === history.length - 1}
                />
                <span>Search item: {search.item}</span>
                <div className={styles.buttons}>
                    <div className={styles.traverseButtons}>
                        <button
                            type="button"
                            disabled={index - 1 < 0}
                            onClick={() => setIndex(index - 1)}
                        >
                            Prev
                        </button>
                        <button
                            type="button"
                            disabled={index + 1 >= history.length}
                            onClick={() => setIndex(index + 1)}
                        >
                            Next
                        </button>
                    </div>
                    <button type="button" onClick={randomiseSearch}>
                        Randomise
                    </button>
                </div>
            </div>
            <CodeBlock codeArray={codeArray} />
        </div>
    );
}
export default BinarySearch;
