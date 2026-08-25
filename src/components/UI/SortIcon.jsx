import { memo } from "react";
import styles from "./icons.module.css";

export default memo(function SortIcon() {
    return (
        <span className={styles.wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect x="8" y="90" width="15" height="10" />
                <rect x="31" y="70" width="15" height="30" />
                <rect x="54" y="40" width="15" height="60" />
                <rect x="77" y="10" width="15" height="90" />
            </svg>
        </span>
    );
});
