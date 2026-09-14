import DirectedGraph from "./DirectedGraph";

function randomGraph(nodeCount, edgeProportion, directedEdgeProportion) {
    const MAX_WEIGHT = 20;

    const randomValue = (max) => Math.floor(Math.random() * max);
    const randomNode = () => randomValue(nodeCount);
    const randomNotSameNode = (n) => {
        const array = Array.from({ length: nodeCount }, (_, i) => {
            return i;
        });
        if (array.indexOf(n) > -1) array.splice(array.indexOf(n), 1);
        return array[randomValue(array.length)];
    };

    const edgeCount = Math.floor(
        0.5 * nodeCount * (nodeCount + 1) * edgeProportion
    );
    const directedEdgeCount = Math.floor(edgeCount * directedEdgeProportion);

    const inTree = new Array(nodeCount).fill(false);
    const next = new Array(nodeCount);
    // Wilson's algorithm to produce random spanning tree
    // next[i] contains the node that i connects to
    next[0] = null;
    inTree[0] = true;

    for (let i = 0; i < nodeCount; i++) {
        let u = i;
        while (!inTree[u]) {
            next[u] = randomNotSameNode(u);
            u = next[u];
        }
        u = i;
        while (!inTree[u]) {
            inTree[u] = true;
            u = next[u];
        }
    }

    const edges = [];
    // subtract accounting for edges in spanning tree already
    for (let i = 0; i < edgeCount - (next.length - 1); i++) {
        let node1 = randomNode();
        let node2 = randomNotSameNode(node1);

        while (
            edges.some(
                (edge) =>
                    (edge.from === node1 && edge.to === node2) ||
                    (edge.from === node2 && edge.to === node1)
            ) ||
            next[node1] === node2 ||
            next[node2] === node1
        ) {
            node1 = randomNode();
            node2 = randomNotSameNode(node1);
        }

        edges.push({
            from: node1,
            to: node2,
            value: randomValue(MAX_WEIGHT),
            directed: false,
        });
    }

    // subtract accounting for edges in spanning tree already
    for (let i = 0; i < directedEdgeCount - (next.length - 1); i++) {
        const edge = edges[i];
        edge.directed = true;
    }
    // next[0] = null so shouldnt be included
    next.forEach((next, i) => {
        if (i !== 0) {
            edges.push({
                from: i,
                to: next,
                value: randomValue(MAX_WEIGHT),
                directed: false,
            });
        }
    });
    return new DirectedGraph(nodeCount, edges);
}

export default randomGraph;
