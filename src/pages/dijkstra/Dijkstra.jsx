import { useOutletContext } from "react-router";
import { useEffect, useMemo, useState } from "react";
import randomGraph from "../../utils/randomGraph.js";

import Table from "../../components/table/Table.jsx";
import Array from "../../components/array/Array.jsx";
import Graph from "../../components/graph/Graph.jsx";
import DirectedGraph from "../../utils/DirectedGraph.js";

import dijkstra from "./dijkstraAlg.js";
import codeSnippets from "./dijkstraSnippets";
import styles from "./dijkstra.module.css";

function Dijkstra() {
    const { historyIndex, setHistoryIndex, setAlgorithm } = useOutletContext();
    const [state, setState] = useState({
        source: 0,
        target: 2,
        graph: new DirectedGraph(8, [
            { from: 0, to: 3, value: 3, directed: false },
            { from: 0, to: 5, value: 13, directed: false },
            { from: 0, to: 6, value: 9, directed: true },
            { from: 1, to: 2, value: 3, directed: false },
            { from: 2, to: 6, value: 8, directed: false },
            { from: 3, to: 1, value: 5, directed: true },
            { from: 3, to: 7, value: 4, directed: false },
            { from: 4, to: 6, value: 2, directed: false },
            { from: 5, to: 1, value: 4, directed: true },
            { from: 5, to: 2, value: 5, directed: true },
            { from: 5, to: 6, value: 7, directed: false },
            { from: 6, to: 7, value: 6, directed: false },
            { from: 7, to: 4, value: 1, directed: true },
        ]),
    });

    const history = useMemo(() => {
        return dijkstra(state.graph, state.source, state.target);
    }, [state]);

    useEffect(() => {
        setAlgorithm({
            name: "Dijkstra",
            codeSnippets: codeSnippets,
            historyLength: history.length,
            randomise: () =>
                setState({
                    source: Math.floor(Math.random() * 8),
                    target: Math.floor(Math.random() * 8),
                    graph: randomGraph(8, 0.3, 1),
                }),
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    const currIteration = history[historyIndex];

    return (
        <div className={styles.main}>
            <div className={styles.graphWrapper}>
                <Graph
                    initialNodes={currIteration.graph.nodes().map((val) => {
                        return { value: val };
                    })}
                    initialEdges={currIteration.graph.edges()}
                    visited={currIteration.visited}
                    source={currIteration.source}
                    target={currIteration.end}
                    current={currIteration.current}
                    neighbour={currIteration.neighbour}
                />
                <div className={styles.info}>
                    <span className={styles.source}>
                        Source: {currIteration.source}
                    </span>
                    <span className={styles.target}>
                        Target: {currIteration.end}
                    </span>
                </div>
            </div>
            <div className={styles.state}>
                <div className={styles.visited}>
                    <span className={styles.visitedText}>Visited</span>
                    <Array caption="Visited" items={currIteration.visited} />
                </div>
                <div className={styles.table}>
                    <span className={styles.pqText}>Priority Queue</span>
                    <Table
                        caption="Priority Queue"
                        headings={["Node", "Distance"]}
                        rows={currIteration.pq.map((node) => {
                            return [node, currIteration.distances.get(node)];
                        })}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dijkstra;
