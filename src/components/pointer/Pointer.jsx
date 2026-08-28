import styles from "./pointer.module.css";

export default function Pointer({ size }) {
    return (
        <span className={styles.wrapper} style={{ "--size": size }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <defs>
                    <marker
                        id="arrow"
                        viewBox="0 0 10 14"
                        refX="5"
                        refY="7"
                        markerWidth="12"
                        markerHeight="12"
                        orient="auto-start-reverse"
                    >
                        <path d="M 0 0 L 10 7 L 0 14 z" />
                    </marker>
                </defs>

                <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="85"
                    stroke="black"
                    strokeWidth="3"
                    markerEnd="url(#arrow)"
                />
            </svg>
        </span>
    );
}
