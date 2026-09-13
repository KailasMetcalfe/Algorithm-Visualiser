import PriorityQueue from "../../utils/PriorityQueue";

function dijkstra(graph, sourceNode, endNode) {
    let history = [];

    let distances = new Map();
    let pq = new PriorityQueue();
    let visitedNodes = [];

    function updateNode(node, newDistance) {
        distances.set(node, newDistance);
        pq.updatePriority(node, newDistance);
    }

    for (let node of graph.nodes()) {
        distances.set(node, Infinity);
        pq.enqueue({ value: node, priority: Infinity });
    }

    updateNode(sourceNode, 0);
    while (!(pq.isEmpty() || visitedNodes.includes(endNode))) {
        history.push({
            graph: graph,
            source: sourceNode,
            end: endNode,
            visited: [...visitedNodes],
            distances: new Map(distances),
            pq: pq.snapshot(),
            current: null,
            neighbour: null,
        });

        const currentNode = pq.dequeue();
        visitedNodes.push(currentNode);

        history.push({
            graph: graph,
            source: sourceNode,
            end: endNode,
            visited: [...visitedNodes],
            distances: new Map(distances),
            pq: pq.snapshot(),
            current: currentNode,
            neighbour: null,
        });

        for (let neighbourNode of graph.successors(currentNode)) {
            if (!visitedNodes.includes(neighbourNode)) {
                history.push({
                    graph: graph,
                    source: sourceNode,
                    end: endNode,
                    visited: [...visitedNodes],
                    distances: new Map(distances),
                    pq: pq.snapshot(),
                    current: currentNode,
                    neighbour: neighbourNode,
                });

                const distance = graph.edgeValue(currentNode, neighbourNode);
                if (distance === null) throw new Error("Error: Invalid Edge");
                const newDistance = distance + distances.get(currentNode);
                if (newDistance < distances.get(neighbourNode)) {
                    updateNode(neighbourNode, newDistance);
                    history.push({
                        graph: graph,
                        source: sourceNode,
                        end: endNode,
                        visited: [...visitedNodes],
                        distances: new Map(distances),
                        pq: pq.snapshot(),
                        current: currentNode,
                        neighbour: neighbourNode,
                    });
                }
            }
        }
    }
    return history;
}

export default dijkstra;
