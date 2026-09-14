const js = `function dijkstra(graph, sourceNode, endNode) {
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
        const currentNode = pq.dequeue();
        visitedNodes.push(currentNode);

        for (let neighbourNode of graph.successors(currentNode)) {
            if (!visitedNodes.includes(neighbourNode)) {
                const weight = graph.edgeValue(currentNode, neighbourNode);
                const distance = weight + distances.get(currentNode);
                if (distance < distances.get(neighbourNode)) {
                    updateNode(neighbourNode, distance);
                }
            }
        }
    }
    return distances[endNode];
}`;

export default [{ language: "javascript", code: js }];
