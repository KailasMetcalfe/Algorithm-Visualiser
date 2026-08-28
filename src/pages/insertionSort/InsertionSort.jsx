import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import { randomArray } from "../../utils/randomiseArray";

import insertionSort from "./insertionSortAlg";

import Bars from "../../components/bars/Bars";
import Bar from "../../components/bars/Bar";

import codeSnippets from "./insertionSortSnippets";
import styles from "./insertionSort.module.css";

function InsertionSort() {
    const { historyIndex, setHistoryIndex, setAlgorithm } = useOutletContext();
    const [originalArray, setOriginalArray] = useState([
        45, 12, 7, 68, 27, 19, 4,
    ]);

    const history = useMemo(() => {
        return insertionSort(originalArray);
    }, [originalArray]);

    useEffect(() => {
        setAlgorithm({
            name: "Insertion Sort",
            codeSnippets: codeSnippets,
            historyLength: history.length,
            randomise: () => setOriginalArray(randomArray(7)),
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    const { array, index, insertionIndex, stored } = history[historyIndex];
    const iteration = useMemo(() => {
        return array.map((item, currIndex) => {
            let active = false;
            if (currIndex <= index) active = true;

            return { value: item, active: active };
        });
    }, [array, index]);

    return (
        <div className={styles.main}>
            <Bars array={iteration} pointer={insertionIndex} />
            <Bar value={stored} title="Temp:" />
        </div>
    );
}
export default InsertionSort;
