import styles from "./table.module.css";
function Table({ headings, rows }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.headerRow}>
                    {headings.map((heading, i) => {
                        return (
                            <th
                                scope="col"
                                key={`${heading}${i}`}
                                className={styles.cell}
                            >
                                {heading}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => {
                    return (
                        <tr key={i} className={styles.dataRow}>
                            {row.map((cell, i) => {
                                return (
                                    <td
                                        key={`${cell}${i}`}
                                        className={styles.cell}
                                    >
                                        {cell}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
