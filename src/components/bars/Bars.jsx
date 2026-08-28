import Pointer from "../pointer/Pointer";
import styles from "./bars.module.css";

export default function Bars({ array, pointer = null }) {
    const pointerSize = 40;
    return (
        <div
            className={styles.main}
            style={{ "--size": array.length, "--pointer-size": pointerSize }}
        >
            {pointer !== null ? (
                <div
                    className={styles.pointer}
                    style={{ gridRowStart: 1, gridColumnStart: pointer + 2 }}
                >
                    <Pointer size={pointerSize} />
                </div>
            ) : null}
            {array.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={
                            item.active ? styles.activeBar : styles.inactiveBar
                        }
                        style={{
                            height: `calc(var(--scale) * ${item.value})`,
                            gridColumnStart: index + 2,
                        }}
                    ></div>
                );
            })}
            {array.map((item, index) => {
                return (
                    <span
                        key={index}
                        className={
                            item.active
                                ? styles.activeLabel
                                : styles.inactiveLabel
                        }
                        style={{ gridColumnStart: index + 2 }}
                    >
                        {item.value}
                    </span>
                );
            })}
        </div>
    );
}
