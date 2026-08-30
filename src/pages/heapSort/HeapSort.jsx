import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import { randomArray } from "../../utils/randomiseArray";

import HeapTree from "../../components/heapTree/HeapTree.jsx";
import Bars from "../../components/bars/Bars.jsx";

import heapSort from "./heapSortAlg.js";
// import codeSnippets from "./heapSortSnippets";
import styles from "./heapSort.module.css";

function HeapSort() {
    const { historyIndex, setHistoryIndex, setAlgorithm } = useOutletContext();
    const [originalArray, setOriginalArray] = useState([45, 12, 7, 68, 27, 19]);

    const history = useMemo(() => {
        return heapSort(originalArray);
    }, [originalArray]);

    useEffect(() => {
        setAlgorithm({
            name: "Merge Sort",
            // codeSnippets: codeSnippets,
            historyLength: history.length,
            randomise: () => setOriginalArray(randomArray(10)),
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    const currIteration = history[historyIndex];

    const activeArray = currIteration.array.map((item, index) => ({
        value: item,
        active: index < currIteration.heapSize,
    }));

    const highlightArray = activeArray.map((item, i) => {
        return {
            ...item,
            selected:
                i === currIteration.current || i === currIteration.swapping,
        };
    });
    return (
        <div className={styles.main}>
            <Bars array={activeArray} pointer={currIteration.current} />
            <div className={styles.heapTreeWrapper}>
                <span className={styles.title}>Heap Tree</span>
                <HeapTree array={highlightArray} />
            </div>
        </div>
    );
}

export default HeapSort;
