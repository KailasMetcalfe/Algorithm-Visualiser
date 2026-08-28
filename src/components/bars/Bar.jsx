import styles from "./bar.module.css";

export default function Bar({ value, title = "" }) {
    return (
        <div className={styles.main}>
            <span className={styles.title}>{title}</span>
            <div
                className={styles.bar}
                style={{
                    height: `calc(var(--scale) * ${value})`,
                }}
            ></div>
            <span className={styles.value}>{value}</span>
        </div>
    );
}
