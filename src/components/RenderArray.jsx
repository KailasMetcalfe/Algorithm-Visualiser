import styles from "./renderArray.module.css";

function RenderArray({ items, leftP, rightP, middleP, found, last }) {
    return (
        <div className={styles.iteration} style={{ "--length": items.length }}>
            <div className={styles.array}>
                {items.map((item, index) => {
                    const activeClasses = [
                        styles.item,
                        index <= rightP && index >= leftP && styles.active,
                        index === leftP && styles.left,
                        index === rightP && styles.right,
                        index === middleP && styles.middle,
                    ]
                        .filter(Boolean)
                        .join(" ");
                    return (
                        <div className={activeClasses} key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
            {items.map((_, index) => {
                const labels = [];
                if (index === leftP)
                    labels.push({ text: "L", className: styles.leftPointer });
                if (index === middleP)
                    labels.push({ text: "M", className: styles.middlePointer });
                if (index === rightP)
                    labels.push({ text: "R", className: styles.rightPointer });

                return (
                    <div key={index} className={styles.pointerGroup}>
                        {labels.map((lbl) => (
                            <span key={lbl.text} className={lbl.className}>
                                {lbl.text}
                            </span>
                        ))}
                    </div>
                );
            })}
            {found ? (
                <span className={styles.found}>Found</span>
            ) : last ? (
                <span className={styles.notFound}>Not found!</span>
            ) : null}
        </div>
    );
}

export default RenderArray;
