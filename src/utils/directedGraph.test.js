import { beforeEach, expect, it } from "vitest";
import Graph from "./DirectedGraph.js";

describe("Check graph stored undirected values correctly", () => {
    let graph;
    beforeEach(() => {
        graph = new Graph(5, [
            { from: 1, to: 3, directed: false, value: 7 },
            { from: 2, to: 3, directed: false, value: 2 },
            { from: 4, to: 0, directed: true, value: 8 },
            { from: 0, to: 1, directed: true, value: 5 },
            { from: 0, to: 2, directed: false, value: 4 },
            { from: 4, to: 3, directed: false, value: 2 },
        ]);
    });

    it("Test total number of edges", () => {
        expect(graph.edgeCount).toBe(6);
        graph.addEdge({ from: 1, to: 3, directed: false, value: 2 });
        expect(graph.edgeCount).toBe(6);

        graph.addEdge({ from: 2, to: 4, directed: true, value: 3 });
        expect(graph.edgeCount).toBe(7);
    });

    it("Test undirected edges added correctly", () => {
        expect(graph.hasEdge(1, 3)).toBe(true);
        expect(graph.hasEdge(3, 1)).toBe(true);

        expect(graph.hasEdge(2, 3)).toBe(true);
        expect(graph.hasEdge(3, 2)).toBe(true);

        expect(graph.hasEdge(0, 2)).toBe(true);
        expect(graph.hasEdge(2, 0)).toBe(true);

        expect(graph.hasEdge(1, 4)).toBe(false);
        expect(graph.hasEdge(4, 2)).toBe(false);
    });

    it("Test directed edges added correctly", () => {
        expect(graph.hasEdge(4, 0)).toBe(true);
        expect(graph.hasEdge(0, 4)).toBe(false);

        expect(graph.hasEdge(0, 1)).toBe(true);
        expect(graph.hasEdge(1, 0)).toBe(false);
    });

    it("Test successor nodes", () => {
        expect(graph.successors(1)).toEqual([3]);
        expect(graph.successors(0)).toEqual([1, 2]);
        expect(graph.successors(4)).toEqual([0, 3]);
    });

    it("Test nodes()", () => {
        expect(graph.nodes()).toEqual([0, 1, 2, 3, 4]);
    });
});
