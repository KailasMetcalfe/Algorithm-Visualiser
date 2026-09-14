import styles from "./array.module.css";

function Array({ items }) {
    return (
        <table className={styles.array}>
            <thead>
                <tr className={styles.main}>
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
