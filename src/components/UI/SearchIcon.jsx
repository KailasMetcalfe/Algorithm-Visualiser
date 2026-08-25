import { memo } from "react";
import styles from "./icons.module.css";

export default memo(function SearchIcon() {
    return (
        <span className={styles.wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect
                    x="50"
                    y="50"
                    width="40"
                    height="10"
                    rx="5"
                    ry="5"
                    transform="rotate(45, 54, 54)"
                />
                <circle
                    cx="35"
                    cy="35"
                    r="20"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                />
            </svg>
        </span>
    );
});
