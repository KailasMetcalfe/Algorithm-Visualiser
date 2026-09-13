import styles from "./array.module.css";

function Array({ caption, items }) {
    return (
        <table className={styles.array}>
            <caption className={styles.caption}>{caption}</caption>
            <thead>
                <tr>
                    {items.map((val, i) => {
                        return (
                            <th key={`${val}${i}`} className={styles.cell}>
                                {val}
                            </th>
                        );
                    })}
                </tr>
            </thead>
        </table>
    );
}

export default Array;
