class DirectedGraph {
    #edgeCount = 0;
    #size = 0;

    constructor(size, edges) {
        this.adjMatrix = Array.from({ length: size }, () =>
            Array(size).fill(null)
        );
        this.#size = size;
        this.#edgeCount = edges.length;
        for (let edge of edges) {
            if (!this.#validEdge(edge.from, edge.to)) {
                throw new Error("Invalid edge:" + edge.toString());
            }

            this.adjMatrix[edge.from][edge.to] = edge.value;
            if (!edge.directed) {
                this.adjMatrix[edge.to][edge.from] = edge.value;
            }
        }
    }

    #validEdge(from, to) {
        if (from > 0 || from < this.#size || to > 0 || to < this.#size)
            return true;
        else return false;
    }

    hasEdge(from, to) {
        return this.adjMatrix[from][to] !== null;
    }

    edgeValue(from, to) {
        return this.hasEdge(from, to) ? this.adjMatrix[from][to] : null;
    }

    addEdge(edge) {
        if (this.#validEdge(edge.from, edge.to)) {
            if (this.adjMatrix[edge.from][edge.to] === null) this.#edgeCount++;

            this.adjMatrix[edge.from][edge.to] = edge.value;
            if (!edge.directed) this.adjMatrix[edge.to][edge.from] = edge.value;

            return true;
        } else return false;
    }

    successors(node) {
        return this.adjMatrix[node]
            .map((val, i) => {
                if (val !== null) return i;
                else return null;
            })
            .filter((val) => val !== null);
    }

    nodes() {
        return Array.from({ length: this.#size }, (_, i) => {
            return i;
        });
    }

    edges() {
        const edges = [];
        for (let i = 0; i < this.#size; i++) {
            for (let j = 0; j < this.#size; j++) {
                if (this.hasEdge(i, j)) {
                    const value = this.adjMatrix[i][j];
                    const oppositeValue = this.adjMatrix[j][i];
                    const isDirected = value !== oppositeValue;

                    if (!isDirected && i > j) continue;
                    else {
                        edges.push({
                            source: i,
                            target: j,
                            weight: value,
                            directed: isDirected,
                        });
                    }
                }
            }
        }
        return edges;
    }

    get edgeCount() {
        return this.#edgeCount;
    }
}

export default DirectedGraph;
