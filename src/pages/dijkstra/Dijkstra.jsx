import { useOutletContext } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { randomArray } from "../../utils/randomiseArray";

import Graph from "../../components/graph/Graph.jsx";
import DirectedGraph from "../../utils/DirectedGraph.js";

import dijkstra from "./dijkstraAlg.js";
// import codeSnippets from "./dijkstraSnippets";
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
            // codeSnippets: codeSnippets,
            historyLength: history.length,
            // randomise: () => setWeights(randomArray(14)),
        });
    }, [setAlgorithm, setHistoryIndex, history.length]);

    // const currIteration = history[historyIndex];

    // const activeArray = currIteration.array.map((item, index) => ({
    //     value: item,
    //     active: index < currIteration.heapSize,
    // }));

    // const highlightArray = activeArray.map((item, i) => {
    //     return {
    //         ...item,
    //         selected:
    //             i === currIteration.current || i === currIteration.swapping,
    //     };
    // });
    console.log(state.graph.edges());
    return (
        <div className={styles.main}>
            <Graph
                initialNodes={state.graph.nodes().map((val) => {
                    return { value: val };
                })}
                initialEdges={state.graph.edges()}
            />
        </div>
    );
}

export default Dijkstra;
