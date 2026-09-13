import dijkstra from "./dijkstraAlg.js";
import Graph from "../../utils/Graph.js";

describe("Check dijkstra with graph of 5 nodes", () => {
    function map(...values) {
        return new Map(values.map((val, i) => [i, val]));
    }

    let graph;
    beforeEach(() => {
        graph = new Graph(5, [
            { from: 0, to: 1, value: 4, directed: false },
            { from: 0, to: 3, value: 6, directed: false },
            { from: 0, to: 4, value: 5, directed: false },
            { from: 1, to: 3, value: 5, directed: true },
            { from: 3, to: 2, value: 2, directed: true },
            { from: 4, to: 3, value: 7, directed: false },
            { from: 4, to: 2, value: 3, directed: false },
        ]);
    });
    it("Shortest path from node 0 to node 2", () => {
        const history = [
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [],
                distances: map(0, Infinity, Infinity, Infinity, Infinity),
                pq: [0, 1, 2, 3, 4],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0], // push
                distances: map(0, Infinity, Infinity, Infinity, Infinity),
                pq: [1, 2, 3, 4], // dequeue
                current: 0, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, Infinity, Infinity, Infinity, Infinity),
                pq: [1, 2, 3, 4],
                current: 0,
                neighbour: 1, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, 4, Infinity, Infinity, Infinity), // update
                pq: [1, 2, 3, 4], // update
                current: 0,
                neighbour: 1,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, 4, Infinity, Infinity, Infinity),
                pq: [1, 2, 3, 4],
                current: 0,
                neighbour: 3, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, 4, Infinity, 6, Infinity), // update
                pq: [1, 3, 2, 4], // update
                current: 0,
                neighbour: 3,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, 4, Infinity, 6, Infinity),
                pq: [1, 3, 2, 4],
                current: 0,
                neighbour: 4, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, 4, Infinity, 6, 5), // update
                pq: [1, 4, 3, 2], // update
                current: 0,
                neighbour: 4,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0],
                distances: map(0, 4, Infinity, 6, 5),
                pq: [1, 4, 3, 2],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1], // push
                distances: map(0, 4, Infinity, 6, 5),
                pq: [4, 3, 2], // dequeue
                current: 1, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1],
                distances: map(0, 4, Infinity, 6, 5),
                pq: [4, 3, 2],
                current: 1,
                neighbour: 3, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1],
                distances: map(0, 4, Infinity, 6, 5),
                pq: [4, 3, 2],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4], // push
                distances: map(0, 4, Infinity, 6, 5),
                pq: [3, 2], // dequeue
                current: 4, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4],
                distances: map(0, 4, Infinity, 6, 5),
                pq: [3, 2],
                current: 4,
                neighbour: 2, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4],
                distances: map(0, 4, 8, 6, 5), // update
                pq: [3, 2],
                current: 4,
                neighbour: 2,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4],
                distances: map(0, 4, 8, 6, 5),
                pq: [3, 2],
                current: 4,
                neighbour: 3, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4],
                distances: map(0, 4, 8, 6, 5),
                pq: [3, 2],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4, 3], // push
                distances: map(0, 4, 8, 6, 5),
                pq: [2], // dequeue
                current: 3, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4, 3],
                distances: map(0, 4, 8, 6, 5),
                pq: [2],
                current: 3,
                neighbour: 2, // next neighbour
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4, 3],
                distances: map(0, 4, 8, 6, 5),
                pq: [2],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 0,
                end: 2,
                visited: [0, 1, 4, 3, 2], // push
                distances: map(0, 4, 8, 6, 5),
                pq: [], // dequeue
                current: 2, // next current
                neighbour: null,
            },
            // TODO: ADD SHORTEST PATH
        ];
        expect(dijkstra(graph, 0, 2)).toEqual(history);
    });

    it("Shortest path from node 2 to node 3", () => {
        const history = [
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [],
                distances: map(Infinity, Infinity, 0, Infinity, Infinity),
                pq: [2, 0, 1, 3, 4],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2], // push
                distances: map(Infinity, Infinity, 0, Infinity, Infinity),
                pq: [0, 1, 3, 4], // dequeue
                current: 2, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2],
                distances: map(Infinity, Infinity, 0, Infinity, Infinity),
                pq: [0, 1, 3, 4],
                current: 2,
                neighbour: 4, // next neighbour
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2],
                distances: map(Infinity, Infinity, 0, Infinity, 3), // update
                pq: [4, 0, 1, 3], // update
                current: 2,
                neighbour: 4,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2],
                distances: map(Infinity, Infinity, 0, Infinity, 3),
                pq: [4, 0, 1, 3],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4], // push
                distances: map(Infinity, Infinity, 0, Infinity, 3),
                pq: [0, 1, 3], // dequeue
                current: 4, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4],
                distances: map(Infinity, Infinity, 0, Infinity, 3),
                pq: [0, 1, 3],
                current: 4,
                neighbour: 0, // next neighbour
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4],
                distances: map(8, Infinity, 0, Infinity, 3), // update
                pq: [0, 1, 3],
                current: 4,
                neighbour: 0,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4],
                distances: map(8, Infinity, 0, Infinity, 3),
                pq: [0, 1, 3],
                current: 4,
                neighbour: 3, // next neighbour
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4],
                distances: map(8, Infinity, 0, 10, 3), // update
                pq: [0, 3, 1], // update
                current: 4,
                neighbour: 3,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4],
                distances: map(8, Infinity, 0, 10, 3),
                pq: [0, 3, 1],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4, 0], // push
                distances: map(8, Infinity, 0, 10, 3),
                pq: [3, 1], // dequeue
                current: 0, // next current
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4, 0],
                distances: map(8, Infinity, 0, 10, 3),
                pq: [3, 1],
                current: 0,
                neighbour: 1, // next neighbour
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4, 0],
                distances: map(8, 12, 0, 10, 3), // update
                pq: [3, 1],
                current: 0,
                neighbour: 1,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4, 0],
                distances: map(8, 12, 0, 10, 3),
                pq: [3, 1],
                current: 0,
                neighbour: 3, // next neighbour
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4, 0],
                distances: map(8, 12, 0, 10, 3),
                pq: [3, 1],
                current: null,
                neighbour: null,
            },
            {
                graph: graph,
                source: 2,
                end: 3,
                visited: [2, 4, 0, 3], // push
                distances: map(8, 12, 0, 10, 3),
                pq: [1], // dequeue
                current: 3, // next current
                neighbour: null,
            },
        ];
        expect(dijkstra(graph, 2, 3)).toEqual(history);
    });
});
