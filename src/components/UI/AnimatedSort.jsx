import styles from "./animatedSort.module.css";

export default function AnimatedSort() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <span className={styles.hoverText}>
                Do you know which sorting algorithm this is?
            </span>
        </div>
    );
}
