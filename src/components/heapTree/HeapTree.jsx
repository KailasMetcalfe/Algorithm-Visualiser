import Node from "./Node";
import styles from "./heapTree.module.css";

// Binary Tree
function HeapTree({ array }) {
    const depth = (i) => Math.floor(Math.log2(i) + 1);
    const DEPTH = depth(array.length);
    const PERFECT_TREE_TOTAL_NODES = Math.pow(2, DEPTH) - 1;
    const PERFECT_TREE_LEAF_COUNT = Math.pow(2, DEPTH - 1);

    const parentIndex = (i) => Math.floor((i - 1) / 2);
    const leftChildIndex = (i) => 2 * i + 1;
    const rightChildIndex = (i) => 2 * i + 2;

    const nodeSize = 70;
    const rowGap = 30;
    const columnGap = 20;

    // Generate gridColumn property for each node & top/bottom coordinate for edges
    const layout = [];

    /*  Generate the values for the whole smallest perfect tree which encompasses the 
        heapTree via memoization (ie work from lowest level up) */

    // Note: -1 / +1 correction term is for 0-indexing of the layout array
    for (let i = PERFECT_TREE_TOTAL_NODES - 1; i >= 0; i--) {
        if (rightChildIndex(i) <= PERFECT_TREE_TOTAL_NODES - 1) {
            // Right child exists in perfect tree (left must also by definition of perfect)

            const xCoord =
                (layout[rightChildIndex(i)].topPos.x +
                    layout[leftChildIndex(i)].topPos.x) /
                2;

            layout[i] = {
                columnStart: layout[leftChildIndex(i)].columnStart,
                columnEnd: layout[rightChildIndex(i)].columnEnd,
                topPos: {
                    x: xCoord,
                    y: layout[leftChildIndex(i)].topPos.y - nodeSize - rowGap,
                },
                bottomPos: {
                    x: xCoord,
                    y: layout[leftChildIndex(i)].topPos.y - rowGap,
                },
            };
        } else {
            const columnStart =
                PERFECT_TREE_LEAF_COUNT - (PERFECT_TREE_TOTAL_NODES - (i + 1));
            layout[i] = {
                columnStart: columnStart,
                columnEnd: columnStart + 1,
                topPos: {
                    x:
                        (nodeSize + columnGap) * (columnStart - 1) +
                        nodeSize / 2,
                    y: (nodeSize + rowGap) * (depth(i + 1) - 1),
                },
                bottomPos: {
                    x:
                        (nodeSize + columnGap) * (columnStart - 1) +
                        nodeSize / 2,
                    y: (nodeSize + rowGap) * (depth(i + 1) - 1) + nodeSize,
                },
            };
        }
    }
    return (
        <div
            className={styles.tree}
            style={{
                "--grid-columns": PERFECT_TREE_LEAF_COUNT,
                "--grid-rows": DEPTH,
                "--node-size": `${nodeSize}px`,
                "--row-gap": `${rowGap}px`,
                "--column-gap": `${columnGap}px`,
            }}
        >
            {/* NODES */}
            {array.map((item, i) => {
                return (
                    <div
                        key={i}
                        className={
                            item.active
                                ? item.selected
                                    ? `${styles.active} ${styles.selected}`
                                    : styles.active
                                : styles.inactive
                        }
                        style={{
                            gridRowStart: depth(i + 1),
                            gridColumn: `${layout[i].columnStart} / ${layout[i].columnEnd}`,
                        }}
                    >
                        <Node value={item.value} />
                    </div>
                );
            })}
            {/* EDGES */}
            <div
                className={styles.linesWrapper}
                style={{
                    "--total-width": `${(nodeSize + columnGap) * PERFECT_TREE_LEAF_COUNT - columnGap}px`,
                    "--total-height": `${(nodeSize + rowGap) * DEPTH - rowGap}px`,
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={`0 0 ${(nodeSize + columnGap) * PERFECT_TREE_LEAF_COUNT - columnGap} ${(nodeSize + rowGap) * DEPTH - rowGap}`}
                >
                    {array.map((_, i) => {
                        return i !== 0 ? (
                            // correction term on y1 & y2 for better visual render
                            <line
                                key={i}
                                x1={layout[parentIndex(i)].bottomPos.x}
                                y1={layout[parentIndex(i)].bottomPos.y - 1}
                                x2={layout[i].topPos.x}
                                y2={layout[i].topPos.y + 1}
                                stroke="black"
                                strokeWidth="1"
                            />
                        ) : null;
                    })}
                </svg>
            </div>
        </div>
    );
}

export default HeapTree;
