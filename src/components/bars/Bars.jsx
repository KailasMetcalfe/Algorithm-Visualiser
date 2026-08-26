import styles from "./bars.module.css";

export default function Bars({ array }) {
    return (
        <div className={styles.main} style={{ "--size": array.length }}>
            {array.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={
                            item.active ? styles.activeBar : styles.inactiveBar
                        }
                        style={{ height: `calc(var(--scale) * ${item.value})` }}
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
                    >
                        {item.value}
                    </span>
                );
            })}
        </div>
    );
}
