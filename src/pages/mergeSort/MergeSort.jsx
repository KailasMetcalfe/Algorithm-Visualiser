import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router";
import { randomArray } from "../../utils/randomiseArray";

import Bars from "../../components/bars/Bars.jsx";

import mergeSort from "./mergeSortAlg";
import codeSnippets from "./mergeSortSnippets";
import styles from "./mergeSort.module.css";

function MergeSort() {
    const { historyIndex, setHistoryIndex, setAlgorithm } = useOutletContext();
    const [originalArray, setOriginalArray] = useState([
        45, 12, 7, 68, 27, 19, 4,
    ]);

    const history = useMemo(() => {
        return mergeSort(originalArray);
    }, [originalArray]);

    useEffect(() => {
        setAlgorithm({
            name: "Merge Sort",
            codeSnippets: codeSnippets,
            historyLength: history.length,
            randomise: () => setOriginalArray(randomArray(7)),
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    const currIteration = history[historyIndex];

    const latestDivide = history
        .slice(0, historyIndex + 1)
        .reverse()
        .find((step) => !step.merge);

    const activeArray = latestDivide
        ? currIteration.array.map((item, index) => ({
              value: item,
              active: index >= latestDivide.left && index <= latestDivide.right,
          }))
        : [];

    return history[historyIndex].merge ? (
        // MERGE
        <div className={styles.mainMerge}>
            <Bars array={activeArray} pointer={currIteration.main} />
            <div className={styles.subArrays}>
                <div className={styles.subArray}>
                    <span className={styles.title}>Left</span>
                    <Bars
                        array={currIteration.leftArray.map((item) => {
                            return {
                                value: item,
                                active: true,
                            };
                        })}
                        pointer={currIteration.left}
                    ></Bars>
                </div>
                <div className={styles.subArray}>
                    <span className={styles.title}>Right</span>
                    <Bars
                        array={currIteration.rightArray.map((item) => {
                            return {
                                value: item,
                                active: true,
                            };
                        })}
                        pointer={currIteration.right}
                    ></Bars>
                </div>
            </div>
        </div>
    ) : (
        // DIVIDE
        <div className={styles.mainDivide}>
            <Bars array={activeArray} />
        </div>
    );
}
export default MergeSort;
