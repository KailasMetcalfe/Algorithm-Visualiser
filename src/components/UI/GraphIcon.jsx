import { memo } from "react";
import styles from "./icons.module.css";

export default memo(function GraphIcon() {
    const radius = 5;
    const cs = [
        { x: 15, y: 65 },
        { x: 20, y: 25 },
        { x: 44, y: 43 },
        { x: 54, y: 9 },
        { x: 60, y: 87 },
        { x: 65, y: 55 },
        { x: 94, y: 34 },
    ];

    return (
        <span className={styles.wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <line
                    x1={cs[0].x}
                    y1={cs[0].y}
                    x2={cs[1].x}
                    y2={cs[1].y}
                    className={styles.line}
                />
                <line
                    x1={cs[0].x}
                    y1={cs[0].y}
                    x2={cs[2].x}
                    y2={cs[2].y}
                    className={styles.line}
                />
                <line
                    x1={cs[0].x}
                    y1={cs[0].y}
                    x2={cs[4].x}
                    y2={cs[4].y}
                    className={styles.line}
                />

                <line
                    x1={cs[1].x}
                    y1={cs[1].y}
                    x2={cs[3].x}
                    y2={cs[3].y}
                    className={styles.line}
                />
                <line
                    x1={cs[1].x}
                    y1={cs[1].y}
                    x2={cs[2].x}
                    y2={cs[2].y}
                    className={styles.line}
                />
                <line
                    x1={cs[2].x}
                    y1={cs[2].y}
                    x2={cs[6].x}
                    y2={cs[6].y}
                    className={styles.line}
                />
                <line
                    x1={cs[2].x}
                    y1={cs[2].y}
                    x2={cs[5].x}
                    y2={cs[5].y}
                    className={styles.line}
                />
                <line
                    x1={cs[2].x}
                    y1={cs[2].y}
                    x2={cs[4].x}
                    y2={cs[4].y}
                    className={styles.line}
                />
                <line
                    x1={cs[4].x}
                    y1={cs[4].y}
                    x2={cs[5].x}
                    y2={cs[5].y}
                    className={styles.line}
                />
                <line
                    x1={cs[4].x}
                    y1={cs[4].y}
                    x2={cs[6].x}
                    y2={cs[6].y}
                    className={styles.line}
                />
                <line
                    x1={cs[3].x}
                    y1={cs[3].y}
                    x2={cs[6].x}
                    y2={cs[6].y}
                    className={styles.line}
                />

                {cs.map((circle) => (
                    <circle
                        key={circle.x * circle.y}
                        cx={circle.x}
                        cy={circle.y}
                        r={radius}
                    />
                ))}
            </svg>
        </span>
    );
});
