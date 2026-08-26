import Bars from "../../components/bars/Bars";
import Pointer from "../../components/pointer/Pointer";
import styles from "./insertionSortBars.module.css";

function insertionSortBars({ array, stored, index, insertionIndex }) {
    const activeArray = array.map((item, currIndex) => {
        let active = false;
        if (currIndex <= index) active = true;

        return { value: item, active: active };
    });
    return (
        <div className={styles.main}>
            <div className={styles.mainBars}>
                <div
                    className={styles.pointerRow}
                    style={{ "--size": array.length }}
                >
                    {insertionIndex === -1 && (
                        <span
                            key={insertionIndex}
                            className={styles.pointerOutOfBounds}
                        >
                            <Pointer size={36} />
                        </span>
                    )}
                    {array.map((item, i) => {
                        return i === insertionIndex ? (
                            <Pointer size={36} key={i} />
                        ) : (
                            <span key={i}></span>
                        );
                    })}
                </div>
                <Bars array={activeArray} />
            </div>
            <div className={styles.storedBar}>
                <span className={styles.title}>Temp:</span>
                <div
                    className={styles.bar}
                    style={{ height: `calc(var(--scale) * ${stored})` }}
                ></div>
                <span>{stored}</span>
            </div>
        </div>
    );
}
// <span key={i} className={styles.pointer}>
//     {i === insertionIndex ? "P" : ""}
// </span>
export default insertionSortBars;
