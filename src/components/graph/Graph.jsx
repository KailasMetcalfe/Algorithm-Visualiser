import { useMemo } from "react";
import * as d3 from "d3-force";

import Node from "../node/Node";

function Graph({ initialNodes, initialEdges }) {
    const NODE_RADIUS = 25;
    const MAX_WIDTH = 800;
    const MAX_HEIGHT = 500;

    const { nodes, edges } = useMemo(() => {
        const initialNodeCopy = initialNodes.map((node) => {
            return { ...node };
        });
        const initialEdgeCopy = initialEdges.map((edge) => {
            return { ...edge };
        });

        // arrange graph via forces
        const simulation = d3
            .forceSimulation(initialNodeCopy)
            .force("charge", d3.forceManyBody().strength(-1100))
            .force(
                "link",
                d3
                    .forceLink(initialEdgeCopy)
                    .id((d) => d.value)
                    .distance((d) => 100 + d.weight * 10)
            )
            .force("collide", d3.forceCollide().radius(NODE_RADIUS + 5))
            .force("center", d3.forceCenter(MAX_WIDTH / 2, MAX_HEIGHT / 2));

        for (let i = 0; i < 300; i++) {
            simulation.tick();
        }

        simulation.stop();
        return { nodes: simulation.nodes(), edges: initialEdgeCopy };
    }, [initialNodes, initialEdges]);

    return (
        <div
            style={{
                position: "relative",
                width: `${MAX_WIDTH}px`,
                height: `${MAX_HEIGHT}px`,
            }}
        >
            <svg
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
            >
                <defs>
                    <marker
                        id="arrow"
                        viewBox="0 0 10 14"
                        refX="0"
                        refY="7"
                        markerWidth="5"
                        markerHeight="7"
                        orient="auto-start-reverse"
                    >
                        <path d="M 0 0 L 10 7 L 0 14 z" />
                    </marker>
                </defs>
                {edges.map((edge, i) => {
                    // Makes line connect to border of node rather than centre
                    const distX = edge.target.x - edge.source.x;
                    const distY = edge.target.y - edge.source.y;
                    const hyp = Math.sqrt(
                        Math.pow(distX, 2) + Math.pow(distY, 2)
                    );

                    const offsetX = (NODE_RADIUS / hyp) * distX;
                    const offsetY = (NODE_RADIUS / hyp) * distY;

                    const startX = edge.source.x + offsetX;
                    const startY = edge.source.y + offsetY;
                    const endX = edge.target.x - offsetX;
                    const endY = edge.target.y - offsetY;

                    // To add arrow for directed edge
                    const midX = (startX + endX) / 2;
                    const midY = (startY + endY) / 2;

                    // Weight text position calculations

                    // unit vector in same direction as edge
                    const scaledX = distX / hyp;
                    const scaledY = distY / hyp;

                    // perpendicular unit vector will be (-scaledY, scaledX)
                    // See README.md for more explanation

                    const OFFSET = 12;
                    const labelX = midX - scaledY * OFFSET;
                    const labelY = midY + scaledX * OFFSET;

                    const marker = edge.directed ? "url(#arrow)" : "";
                    return (
                        <g key={i}>
                            <polyline
                                points={`${startX},${startY},${midX},${midY},${endX},${endY}`}
                                stroke="black"
                                markerMid={marker}
                                strokeWidth="2"
                            />
                            <text
                                x={labelX}
                                y={labelY}
                                textAnchor="middle" // Centers text horizontally on midX
                                dominantBaseline="central"
                                fontSize="14px"
                                fontWeight="bold"
                            >
                                {edge.weight}
                            </text>
                        </g>
                    );
                })}
            </svg>

            {nodes.map((node) => (
                <div
                    key={node.value}
                    style={{
                        position: "absolute",
                        left: node.x,
                        top: node.y,
                        transform: "translate(-50%, -50%)",
                        "--node-size": `${NODE_RADIUS * 2}px`,
                    }}
                >
                    <Node value={node.value} />
                </div>
            ))}
        </div>
    );
}

export default Graph;
