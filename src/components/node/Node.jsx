import styles from "./node.module.css";

function Node({ value }) {
    return <span className={styles.node}>{value}</span>;
}

export default Node;
