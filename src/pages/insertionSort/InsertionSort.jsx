import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import InsertionSortBars from "./InsertionSortBars.jsx";
import styles from "./insertionSort.module.css";
import insertionSort from "./insertionSortAlg";
import { randomArray } from "../../utils/randomiseArray";
import codeSnippets from "./insertionSortSnippets";

function InsertionSort() {
    const { historyIndex, setHistoryIndex, setAlgorithm } = useOutletContext();
    const [array, setArray] = useState([45, 12, 7, 68, 27, 19, 4]);

    const history = useMemo(() => {
        return insertionSort(array);
    }, [array]);

    useEffect(() => {
        setAlgorithm({
            name: "Insertion Sort",
            codeSnippets: codeSnippets,
            historyLength: history.length,
            randomise: () => setArray(randomArray(12)),
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    return (
        <div className={styles.main}>
            <InsertionSortBars {...history[historyIndex]} />
        </div>
    );
}
export default InsertionSort;
